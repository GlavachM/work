import { type Locator, type Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    private readonly firstItemAddToCart: Locator;
    private readonly cartButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstItemAddToCart = page.locator('(//*[@class="btn btn_primary btn_small btn_inventory "])[1]');
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    }

    async addItemToCart() {
        await this.firstItemAddToCart.click();
        await this.cartButton.click();
    }
}