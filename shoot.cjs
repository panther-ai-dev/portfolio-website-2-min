const { chromium } = require(process.env.APPDATA + '/npm/node_modules/@executeautomation/playwright-mcp-server/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto('http://localhost:8765/');
  await p.screenshot({ path: 'shots/mobile.png' });
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  await p.screenshot({ path: 'shots/mobile-full.png', fullPage: true });
  await p.click('.menu'); await p.screenshot({ path: 'shots/mobile-menu.png' });
  await p.click('.links a[href="#contact"]'); await p.waitForTimeout(800);
  await p.fill('input[name=name]', 'Test'); await p.fill('input[name=email]', 'test@example.com'); await p.fill('textarea', 'Hi');
  await p.click('.form button'); await p.waitForTimeout(200);
  const status = await p.textContent('.status'); await p.screenshot({ path: 'shots/mobile-form.png' });
  console.log(JSON.stringify({ overflow, status, errs }));
  await b.close();
})();
