import { test, expect, type Page, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});
test.describe('Login Page Validations', () => {
    test('should allow me to login as valid user', async ({ page }) => {
        const userName:Locator =  page.getByPlaceholder("Username");
        const password:Locator = page.getByPlaceholder("Password");
        const signInButton:Locator = page.getByText("Login");
        await userName.fill("standard_user");
        await password.fill("secret_sauce");
        await signInButton.click();
        page.waitForTimeout(3000);




    })
})