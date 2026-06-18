import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'behance-mockups');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const mockups = [
  { file: 'mockup1-phones.html',         out: 'behance-01-phones-angles.png',       w: 1920, h: 1080 },
  { file: 'mockup2-laptop.html',          out: 'behance-02-laptop.png',              w: 1920, h: 1080 },
  { file: 'mockup3-cover.html',           out: 'behance-03-cover.png',               w: 1920, h: 1080 },
  { file: 'mockup4-sections.html',        out: 'behance-04-sections.png',            w: 1920, h: 1080 },
  { file: 'mockup5-mobile-showcase.html', out: 'behance-05-mobile-showcase.png',     w: 1920, h: 1080 },
];

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--allow-file-access-from-files'],
  });

  for (const mockup of mockups) {
    const page = await browser.newPage();
    await page.setViewport({ width: mockup.w, height: mockup.h, deviceScaleFactor: 2 });

    const filePath = `file:///${path.join(__dirname, mockup.file).replace(/\\/g, '/')}`;
    await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 20000 });
    await delay(2000); // wait for fonts and images

    const outPath = path.join(outputDir, mockup.out);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`✅ ${mockup.out}`);
    await page.close();
  }

  await browser.close();
  console.log('\n🎉 Todos os mockups salvos em:', outputDir);
}

run().catch(err => {
  console.error('Erro:', err.message);
  process.exit(1);
});
