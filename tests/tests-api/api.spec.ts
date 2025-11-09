import { test, expect } from '../../fixtures/my-test';

test('Get Booking Ids', async ({ request }) => {
    const responce = await request.get('/booking');
    expect(responce.ok()).toBeTruthy();
    for (const element of await responce.json()) {
        expect(typeof element.bookingid).toBe('number');
    }
})