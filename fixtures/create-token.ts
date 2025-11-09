import { test as base } from '@playwright/test';

type MyFixtures = {
    authToken: string;
}

export const test = base.extend<MyFixtures>({
    authToken: async ({ request }, use) => {
        const responce = await request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                username: 'admin',
                password: 'password123',
            }
        });
        const json = await responce.json();
        const token = json.token;
        console.log(token);
        await use(token);
    }
})

export { expect } from '@playwright/test';
