import puppeteerExtra from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

export async function initializeBrowser() {
    puppeteerExtra.use(stealthPlugin());
    const browser = await puppeteerExtra.launch({
        // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
    });
    return browser;
}