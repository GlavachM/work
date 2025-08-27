import {test, expect} from '../fixtures/my-test';
import { LoginPage } from '../pages/login-page';


test('Success login', async ({ page, loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_container')).toHaveId('inventory_container');
});

test('Unsuccess login', async({page, loginPage}) => {
    await loginPage.login('locked_out_user','secret_sauce');
    await loginPage.loginButton.click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('unsuccess login', async({page, loginPage}) => {
    await loginPage.login('locked_out_user','secret_sauce');
    await loginPage.loginButton.click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});


