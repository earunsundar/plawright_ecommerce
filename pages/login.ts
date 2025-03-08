import { type Page, Locator } from '@playwright/test';

export class Login {
    /**
   * This resuable method is used for user signIn
   * @param disprzAutomatedTestBase
   * @param loginPage
   * @param adminUserName
   * @param adminPassword
   */

    async userSignIn(page: Page,
        user: string,
        password: string
    ): Promise<void> {
        const userName: Locator = page.getByPlaceholder("Username");
        const userPassword: Locator = page.getByPlaceholder("Password");
        const signInButton: Locator = page.getByText("Login");
        await userName.fill(user);
        await userPassword.fill(password);
        await signInButton.click();

    }
}