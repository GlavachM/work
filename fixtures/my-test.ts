import { test as base } from '@playwright/test';
import {LoginPage} from '../pages/login-page';
import {ProductPage} from '../pages/product-page';

type MyFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use) => {
    await use(new LoginPage(page));
    },

    productPage: async({page}, use) => {
    await use(new ProductPage(page));
    }

});
export { expect } from '@playwright/test';



