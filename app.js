const puppeteer = require("puppeteer");

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector("span [title='Soumya']");
    const searchChat= await page.$("span [title='Soumya']");
    await searchChat.click();

    // page.keyboard.press("Enter");
    // page.keyboard.press("s");
    // page.keyboard.press("o");
    // page.keyboard.press("u");
    // page.keyboard.press("m");
    // page.keyboard.press("y");
    // page.keyboard.press("a");
    // page.keyboard.press("Enter");

    const inp = await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
    )

for ( let i=0; i<1000; i++){
    await inp.type("I'm a bit busy now");
    await page.keyboard.press("Enter")
}

}

scrape("https://web.whatsapp.com");