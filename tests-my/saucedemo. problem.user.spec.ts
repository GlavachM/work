import {test, expect} from '../fixtures/my-test';
import credentials from '../testdata/credentials.json'; 

test('Add item to basket', async({ page, loginPage, productPage}) => {
    await loginPage.login(credentials.problemUser.username, credentials.problemUser.password);
    await loginPage.loginButton.click();
    await productPage.addItemToCart();
    await expect(page.locator('.inventory_item_desc')).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

})