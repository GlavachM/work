import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    public readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async login(username: string, password: string){
        await this.page.goto('/');
        await this.username.fill(username);
        await this.password.fill(password);
    }

}