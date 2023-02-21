import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height:1180}
})

test.describe("Testing for iPad", () => {
    test("Testing for slider header size on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000');


        const headerCont = page.locator('#categoryhead');

        const checkingFontSize = await headerCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize);
        expect(checkingFontSize).toBe("20px");
    })
})

test.describe("Testing for iPad", () => {
    test("Testing for refersh icon size on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000');


        const refreshIconCont = page.locator('#refresh');

        const checkingWidth = await refreshIconCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingWidth);
        expect(checkingWidth).toBe("16px");
    })
})