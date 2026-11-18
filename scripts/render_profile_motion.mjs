import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";

const root = process.cwd();
const frames = 40;
const fps = 8;
const assets = [
  { name: "hero-index", width: 1440, height: 620, images: ["portrait-hero.jpg"] },
  { name: "curiosity-index", width: 1440, height: 470, images: [] },
  { name: "workbench", width: 1440, height: 500, images: ["portrait-suit.jpg"] },
  { name: "closing-note", width: 1440, height: 340, images: [] }
];

const fontCss = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Caveat:wght@500;600;700&display=swap');`;

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
      const mime = imageName.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";
      svg = svg.replaceAll(
        'href="' + imageName + '"',
        'href="data:' + mime + ';base64,' + imageBase64 + '"'
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
        "[0:v]fps=" + fps + ",split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer",
        "-loop", "0", rawGif
      ]);
      run("gifsicle", ["--optimize=3", "--lossy=20", rawGif, "-o", outputPath]);
      fs.rmSync(frameDir, { recursive: true, force: true });
      fs.rmSync(rawGif, { force: true });
      console.log("Rendered " + outputPath);
    } finally {
      await page.close();
    }
  }

  // Switch README artwork to GIF only after all four renders completed.
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
