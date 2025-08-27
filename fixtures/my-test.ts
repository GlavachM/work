import { test as base } from '@playwright/test';
import {LoginPage} from '../pages/login-page'

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    await use(loginPage);
    }

});
export { expect } from '@playwright/test';



