import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import { PNG } from 'pngjs';
import { AddDelay, compareImages } from './Utils.js';
import path from 'path';
import { Data } from './Data.js';

export const CollaborationTest = async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1550, height: 700 });
        await page.goto('https://viscommerce.com/collaboration', { timeout: 25000 });
        console.log('website loaded !');

        await page.waitForSelector('#ui-container');
        await page.waitForSelector('#RoomCard');
        await page.waitForSelector('#room-submit');

        await page.select('#room-name', 'Zion National Park')
        await page.click('#room-submit');
        console.log('successfull created a room !');

        await AddDelay(60 * 1000);
        // await AddDelay(1000);

        await page.screenshot({ path: path.join(path.resolve(), 'src/Captures/Now/homepage.png'), fullPage: true, timeout: 30000 });
        console.log('screenshort-catured!');

        Data.Collaboration = compareImages(`${path.join(path.resolve(), 'src/Captures/Expected/homepage.png')}`, `${path.join(path.resolve(), 'src/Captures/Now/homepage.png')}`, `${path.join(path.resolve(), 'src/Captures/Diff/homepage.png')}`);

        console.log('compared');
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await browser.close();
    }
}