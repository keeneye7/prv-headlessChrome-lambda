const puppeteer = require('puppeteer');
const webp=require('webp-converter');


(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto("");
    await page.setViewport({width: 1024, height: 1024, deviceScaleFactor: 2});
    const title = await page.$('.wt_viewer');

    const styles = await page.evaluate(el => window.getComputedStyle(el), title);

    const clip = Object.assign({}, await title.boundingBox());
    clip.y += parseFloat(styles.marginTop) || 0;
    clip.x += parseFloat(styles.marginLeft) || 0;

    const screenshot = await title.screenshot({path: "tweet.png", clip});
    await browser.close();
})();

webp.cwebp('tweet.png', "output.webp", "-q 100", function(status)
{  
    console.log(status);
});
