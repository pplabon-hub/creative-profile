import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";

const root = process.cwd();
const frames = 32;
const fps = 8;
const assets = [
  { name: "fieldbook-cover", width: 1440, height: 680, images: ["portrait-casual.jpg"] },
  { name: "passport-pages", width: 1440, height: 540, images: [] },
  { name: "table-notes", width: 1440, height: 560, images: [] },
  { name: "reflections", width: 1440, height: 520, images: ["portrait-suit.jpg"] }
];

const fontCss = `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap');`;

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit", cwd: root });
}

const browser = await chromium.launch({ headless: true });

try {
  for (const asset of assets) {
    const sourcePath = path.join(root, "assets", asset.name + ".svg");
    const outputPath = path.join(root, "assets", asset.name + ".gif");
    const frameDir = fs.mkdtempSync(path.join(os.tmpdir(), asset.name + "-"));
    let svg = fs.readFileSync(sourcePath, "utf8");

    for (const imageName of asset.images) {
      const imagePath = path.join(root, "assets", imageName);
      const imageBase64 = fs.readFileSync(imagePath).toString("base64");
      svg = svg.replaceAll(
        'href="' + imageName + '"',
        'href="data:image/jpeg;base64,' + imageBase64 + '"'
      );
    }

    const page = await browser.newPage({
      viewport: { width: asset.width, height: asset.height },
      deviceScaleFactor: 1
    });

    try {
      const html = "<!doctype html><html><head><meta charset='utf-8'><style>" +
        fontCss +
        "html,body{margin:0;padding:0;width:" + asset.width + "px;height:" + asset.height +
        "px;overflow:hidden;background:transparent}svg{display:block;width:" + asset.width +
        "px;height:" + asset.height + "px}</style></head><body>" + svg + "</body></html>";

      await page.setContent(html, { waitUntil: "networkidle", timeout: 45000 });
      await page.evaluate(() => document.fonts.ready);

      for (let i = 0; i < frames; i += 1) {
        const file = path.join(frameDir, "frame-" + String(i).padStart(3, "0") + ".png");
        await page.screenshot({ path: file, omitBackground: true });
        await page.waitForTimeout(1000 / fps);
      }

      const rawGif = path.join(os.tmpdir(), asset.name + "-raw.gif");
      run("ffmpeg", [
        "-y", "-framerate", String(fps),
        "-i", path.join(frameDir, "frame-%03d.png"),
        "-filter_complex",
        "[0:v]fps=" + fps + ",split[s0][s1];[s0]palettegen=max_colors=96:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer",
        "-loop", "0", rawGif
      ]);
      run("gifsicle", ["--optimize=3", "--lossy=25", rawGif, "-o", outputPath]);
      fs.rmSync(frameDir, { recursive: true, force: true });
      fs.rmSync(rawGif, { force: true });
      console.log("Rendered " + outputPath);
    } finally {
      await page.close();
    }
  }

  const readmePath = path.join(root, "README.md");
  let readme = fs.readFileSync(readmePath, "utf8");
  for (const asset of assets) {
    readme = readme.replaceAll(
      'src="assets/' + asset.name + '.svg"',
      'src="assets/' + asset.name + '.gif"'
    );
  }
  fs.writeFileSync(readmePath, readme);
} finally {
  await browser.close();
}
