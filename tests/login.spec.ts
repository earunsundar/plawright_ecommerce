import { test, expect, type Page, Locator } from '@playwright/test';
import { Login } from '../pages/login';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});
test.describe('Login Page Validations', () => {
    test('should allow me to login as standard user', async ({ page }) => {;
        const loginPage = new Login();
        loginPage.userSignIn(page,"standard_user","secret_sauce");
        // expect 
        page.waitForTimeout(3000);
    })
    test('should allow me to login as lockedOut user', async ({ page }) => {;
        const loginPage = new Login();
        loginPage.userSignIn(page,"locked_out_user","secret_sauce");
        // expect 
        page.waitForTimeout(3000);
    })
})