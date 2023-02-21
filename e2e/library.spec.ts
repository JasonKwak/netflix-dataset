// import { test, expect } from '@playwright/test'

// let urlHome = "http://localhost:3000";
// let urlLibrary = "http://localhost:3000/library";

// test.beforeAll(async () => {
//     console.log('Before tests');
// });

// test.afterAll(async () => {
//     console.log('After tests');
// });

// test('Navigation', async ({page}) => {

//     await page.goto('http://localhost:3000/')
//     await page.click('text=Home')
//     await expect(page).toHaveURL('http://localhost:3000/')

// })

// test.describe('List Structure', () => {
//     test('Count number of main lists in the ul', async({ page }) => {
//         await page.goto(urlLibrary)
//         await expect(page.locator('ul > li')).toHaveCount(15);
//     })
// })
