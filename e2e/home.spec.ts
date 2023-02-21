import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlLibrary = "http://localhost:3000/library";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Landing Page', () => {

    test('Counting buttons inside landing banner', async ({ page }) => {
        await page.goto(urlHome)
        await expect(page.locator('div > button')).toHaveCount(1);
    })
})

test.describe('Subheader content inside landing banner', () => {
    test('Subheader', async({ page }) => {
        await page.goto(urlHome)
        const landingSubheader = page.locator('#landingtext > p');
        await expect(landingSubheader).toContainText('Cinematic Adventure Awaits!')
    })
})
