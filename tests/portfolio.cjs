// Run: node tests/portfolio.cjs. Uses installed Playwright or PLAYWRIGHT_MODULE.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
let playwright;
try { playwright = require('playwright'); }
catch { playwright = require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/pcsb2/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'); }

(async () => {
  const browser = await playwright.chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  const checks = [];
  const out = path.join(__dirname, 'artifacts');
  fs.mkdirSync(out, { recursive: true });
  try {
    await page.goto(process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'All projects', exact: true }).waitFor();
    assert.match(await page.title(), /Nattapong/);
    assert.equal(await page.locator('h1').count(), 1);
    checks.push('Page loads with one H1 and initialized controls');

    await page.getByRole('button', { name: 'Full-stack', exact: true }).click();
    assert.equal(await page.locator('.project-card:visible').count(), 1);
    assert.match(await page.locator('.project-card:visible').innerText(), /My Payment Pro/);
    await page.getByRole('searchbox', { name: 'Search projects' }).fill('does-not-exist');
    await page.getByRole('heading', { name: 'No matching projects' }).waitFor();
    await page.getByRole('button', { name: 'Reset filters' }).click();
    assert.equal(await page.locator('.project-card:visible').count(), 2);
    await page.getByRole('searchbox').fill('Framer Motion');
    assert.equal(await page.locator('.project-card:visible').count(), 1);
    await page.getByRole('searchbox').fill('');
    checks.push('Category + text search, empty state, and reset work');

    const card = page.locator('.project-card').filter({ has: page.getByRole('heading', { name: 'My Payment Pro', exact: true }) });
    await card.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await card.locator('details').getAttribute('open'), '');
    assert.match(await card.innerText(), /Tesseract.js OCR/);
    checks.push('Keyboard opens project notes and updated expense-management features');

    await page.locator('#photo-input').setInputFiles(path.join(__dirname, '../public/hero.webp'));
    await page.getByText('Photo saved in this browser only.', { exact: true }).waitFor();
    assert.equal(await page.locator('#profile-photo').evaluate(img => img.naturalWidth > 0), true);
    await page.reload({ waitUntil: 'networkidle' });
    await page.locator('#profile-photo').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#profile-photo').evaluate(img => img.complete && img.naturalWidth > 0), true);
    await page.locator('#photo-input').setInputFiles({ name: 'invalid.txt', mimeType: 'text/plain', buffer: Buffer.from('invalid') });
    await page.getByText('Choose a JPG, PNG or WebP image under 3 MB.', { exact: true }).waitFor();
    assert.equal(await page.locator('#profile-photo').isVisible(), true);
    await page.locator('#photo-input').setInputFiles({ name: 'broken.png', mimeType: 'image/png', buffer: Buffer.from('not an image') });
    await page.getByText('This image could not be opened. Please try another file.', { exact: true }).waitFor();
    await page.getByRole('button', { name: 'Remove photo', exact: true }).click();
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.locator('#profile-photo').isVisible(), false);
    assert.equal(await page.evaluate(() => localStorage.getItem('nattapong.profile-preview.v1')), null);
    checks.push('Valid photo loads, survives reload; invalid files preserve it; removal persists');

    await page.getByRole('button', { name: 'Switch to Thai' }).click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'th');
    await page.getByRole('link', { name: 'ดูผลงานของผม', exact: true }).waitFor();
    await page.reload({ waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Switch to English' }).waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'), 'th');
    await page.getByRole('button', { name: 'Switch to English' }).click();
    checks.push('Thai/English copy switch and language persistence');

    assert.equal(await page.locator('.hero-art').evaluate(e => getComputedStyle(e).animationName), 'none');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.getByRole('checkbox', { name: 'Pause motion' }).check();
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.getByRole('checkbox', { name: 'Pause motion' }).isChecked(), true);
    assert.equal(await page.locator('.hero-art').evaluate(e => getComputedStyle(e).animationPlayState), 'paused');
    checks.push('Reduced motion and persistent manual pause');

    for (const width of [1440, 820, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const lang of ['en', 'th']) {
        if (await page.locator('html').getAttribute('lang') !== lang) await page.locator('#language-toggle').click();
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Overflow at ${width}px in ${lang}`);
      }
      await page.locator('#language-toggle').click(); // return to English
      if (width === 1440 || width === 390) {
        await page.locator('#about').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(out, `profile-${width}.png`) });
      }
    }
    checks.push('No horizontal overflow at 1440, 820, 390, 320px in both languages');
    assert.deepEqual(errors, []);
    checks.push('No page errors or failed local resources');
    fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ browser: 'Playwright Chromium / installed Chrome (headless)', checks, errors }, null, 2));
    console.log(checks.map(x => `PASS ${x}`).join('\n'));
  } finally { await context.close(); await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
