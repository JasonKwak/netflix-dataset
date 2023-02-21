// import { test, devices, expect } from '@playwright/test';

// test.use({
//     browserName:'chromium',
//     ...devices['iPhone XR'],
// })

// test.describe("The mobile viewport for iPhone XR", () => {
//     test("Checking for subheader's font weight on iPhone XR", async ({ page }) => {
//         await page.goto('http://localhost:3000');

//         const landingBannerText = page.locator('#landingtext > p');

//         const checkingColour = await landingBannerText.evaluate((ele) => {
//             return window.getComputedStyle(ele).getPropertyValue("font-weight")
//         })

//         console.log(checkingColour);
//         expect(checkingColour).toBe("500");
//     })

//     test("Testing for a logo width on iPhone XR", async ({ page }) => {
//         await page.goto('http://localhost:3000');

//         const logoContainer = page.locator('div > a > img');

//         const checkingWidth = await logoContainer.evaluate((ele) => {
//             return window.getComputedStyle(ele).getPropertyValue("width")
//         })

//         console.log(checkingWidth);
//         expect(checkingWidth).toBe("35px");
//     })
// })