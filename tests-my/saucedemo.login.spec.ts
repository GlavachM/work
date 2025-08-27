import {test, expect} from '../fixtures/my-test';
import credentials from '../testdata/credentials.json'; 

// test.describe.configure({ mode: 'parallel' });

test('Success login', async ({ page, loginPage }) => {
    await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    await loginPage.loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_container')).toHaveId('inventory_container');
});

test('Unsuccess login', async({page, loginPage}) => {
    await loginPage.login(credentials.lockedOutUser.username, credentials.lockedOutUser.password);
    await loginPage.loginButton.click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

