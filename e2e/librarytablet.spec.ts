import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height:1180}
})

test.describe("Testing for library tablet", () => {
    test("Testing height of sidebar menu on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000/library');

        const sideMenu = page.locator('#sidemenu');

        const checkWidth = await sideMenu.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })

        console.log(checkWidth);
        expect(checkWidth).toBe("1180px");
    })

    test("Testing for colours on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000/library');

        const mainContainer = page.locator('#sidebar');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgba(0, 0, 0, 0)");
    })

})