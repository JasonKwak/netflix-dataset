// import { test, devices, expect } from '@playwright/test';

// test.use({
//     browserName:'chromium',
//     ...devices['iPhone XR'],
// })

// test.describe("The mobile viewport for iPhone XR", () => {
//     test("Checking for category title size on iPhone XR", async ({ page }) => {
//         await page.goto('http://localhost:3000/library');

//         const categoryContainer = page.locator('#categorytitle');

//         const checkMovieTitleSize = await categoryContainer.evaluate((ele) => {
//             return window.getComputedStyle(ele).getPropertyValue("font-size")
//         })

//         console.log(checkMovieTitleSize);
//         expect(checkMovieTitleSize).toBe("12.5px");
//     })

//     test("Testing for main div's overflow status on iPhone XR", async ({ page }) => {
//         await page.goto('http://localhost:3000/library');

//         const mainContainer = page.locator('#main');

//         const checkingOverflow = await mainContainer.evaluate((ele) => {
//             return window.getComputedStyle(ele).getPropertyValue("overflow")
//         })

//         console.log(checkingOverflow);
//         expect(checkingOverflow).toBe("hidden");
//     })
// })