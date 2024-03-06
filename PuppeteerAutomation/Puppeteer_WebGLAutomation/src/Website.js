import puppeteer from "puppeteer";
import { AddDelay, compareImages } from "./Utils.js";
import path from "path";
import { Data } from "./Data.js";

export const WebsiteTest = async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1550, height: 700 });
        await page.goto('http://viscommerce.com/', { timeout: 25000 });
        console.log('website loaded !');

        await AddDelay(10 * 1000);
        // await AddDelay(1000);

        await page.screenshot({ path: path.join(path.resolve(), 'src/Captures/Now/WebsiteHomePage.png'), fullPage: true, timeout: 30000 });
        console.log('screenshort-catured!');

        Data.Website = compareImages(`${path.join(path.resolve(), 'src/Captures/Expected/WebsiteHomePage.png')}`, `${path.join(path.resolve(), 'src/Captures/Now/WebsiteHomePage.png')}`, `${path.join(path.resolve(), 'src/Captures/Diff/WebsiteHomePage.png')}`);

        console.log('compared');
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await browser.close();
    }

}

export const WebsiteDemosPage = async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1550, height: 700 });
        await page.goto('https://viscommerce.com/demos', { timeout: 25000 });
        console.log('website loaded !');

        await AddDelay(10 * 1000);
        // await AddDelay(1000);

        await page.screenshot({ path: path.join(path.resolve(), 'src/Captures/Now/WebsiteDemosPage.png'), fullPage: true, timeout: 30000 });
        console.log('screenshort-catured!');

        Data.DemosPage = compareImages(`${path.join(path.resolve(), 'src/Captures/Expected/WebsiteDemosPage.png')}`, `${path.join(path.resolve(), 'src/Captures/Now/WebsiteDemosPage.png')}`, `${path.join(path.resolve(), 'src/Captures/Diff/WebsiteDemosPage.png')}`);

        console.log('compared');
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await browser.close();
    }
}
