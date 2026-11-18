import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";

const root = process.cwd();
const frames = 48;
const fps = 8;
const assets = [
  { name: "hero-index", width: 1440, height: 620 },
  { name: "curiosity-index", width: 1440, height: 420 },
  { name: "closing-note", width: 1440, height: 300 }
];

const fontCss = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');`;

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

    // Inline the user's original portrait so the SVG renders consistently in Playwright.
    if (asset.name === "hero-index") {
      const portraitPath = path.join(root, "assets", "portrait-hero.jpg");
      const portraitBase64 = fs.readFileSync(portraitPath).toString("base64");
      svg = svg.replace(
        'href="portrait-hero.jpg"',
        'href="data:image/jpeg;base64,' + portraitBase64 + '"'
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
