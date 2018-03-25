const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('', {waitUntil: 'networkidle'});
  await page.screenshot({path: 'example.png', fullPage:true});
//   const firstPage = await page.focus('.wt_viewer');
//   console.log(firstPage);
  await browser.close();
})();
