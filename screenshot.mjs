import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, 'petiva-screenshots');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // ── DESKTOP 1440×900 ──
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 30000 });
  await delay(3000);

  // Hero
  await page.screenshot({ path: path.join(outputDir, '01-desktop-hero.png'), fullPage: false });
  console.log('✅ 01-desktop-hero.png');

  // Scroll sections
  const scrollSteps = [900, 1800, 2700, 3600, 4500, 5400];
  for (let i = 0; i < scrollSteps.length; i++) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollSteps[i]);
    await delay(1000);
    await page.screenshot({ path: path.join(outputDir, `0${i + 2}-desktop-section${i + 1}.png`), fullPage: false });
    console.log(`✅ 0${i + 2}-desktop-section${i + 1}.png`);
  }

  // Full page
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await delay(500);
  await page.screenshot({ path: path.join(outputDir, '09-desktop-fullpage.png'), fullPage: true });
  console.log('✅ 09-desktop-fullpage.png');

  // ── MOBILE 390×844 ──
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 30000 });
  await delay(3000);

  await page.screenshot({ path: path.join(outputDir, '10-mobile-hero.png'), fullPage: false });
  console.log('✅ 10-mobile-hero.png');

  const mobileScrollSteps = [844, 1700, 2500, 3400];
  for (let i = 0; i < mobileScrollSteps.length; i++) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), mobileScrollSteps[i]);
    await delay(1000);
    await page.screenshot({ path: path.join(outputDir, `1${i + 1}-mobile-section${i + 1}.png`), fullPage: false });
    console.log(`✅ 1${i + 1}-mobile-section${i + 1}.png`);
  }

  // Mobile full page
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await delay(500);
  await page.screenshot({ path: path.join(outputDir, '15-mobile-fullpage.png'), fullPage: true });
  console.log('✅ 15-mobile-fullpage.png');

  await browser.close();
  console.log('\n🎉 Todos os screenshots salvos em:', outputDir);
}

run().catch(err => {
  console.error('Erro:', err.message);
  process.exit(1);
});
