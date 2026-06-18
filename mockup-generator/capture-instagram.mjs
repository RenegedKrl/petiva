import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'instagram-posts');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const posts = [
  { file: 'insta-01-phones.html',       out: 'insta-01-phones.png' },
  { file: 'insta-02-laptop.html',        out: 'insta-02-laptop.png' },
  { file: 'insta-03-cover.html',         out: 'insta-03-cover.png' },
  { file: 'insta-04-sections.html',      out: 'insta-04-sections.png' },
  { file: 'insta-05-mobile.html',        out: 'insta-05-mobile.png' },
];

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--allow-file-access-from-files'],
  });

  for (const post of posts) {
    const page = await browser.newPage();
    // 1080x1080 @ 2x = 2160x2160 actual pixels
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

    const filePath = `file:///${path.join(__dirname, post.file).replace(/\\/g, '/')}`;
    await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 20000 });
    await delay(2000);

    const outPath = path.join(outputDir, post.out);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`✅ ${post.out}`);
    await page.close();
  }

  await browser.close();
  console.log('\n🎉 Posts do Instagram salvos em:', outputDir);
}

run().catch(err => {
  console.error('Erro:', err.message);
  process.exit(1);
});
