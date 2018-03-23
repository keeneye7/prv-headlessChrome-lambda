const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://comic.naver.com/webtoon/detail.nhn?titleId=119874&no=1139&weekday=fri', {waitUntil: 'networkidle'});
  await page.screenshot({path: 'example.png', fullPage:true});
//   const firstPage = await page.focus('.wt_viewer');
//   console.log(firstPage);
  await browser.close();
})();