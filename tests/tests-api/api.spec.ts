import { test, expect } from '../../fixtures/create-token';


test('Get Booking Ids', async ({ request }) => {
    const responce = await request.get('/booking');
    expect(responce.ok()).toBeTruthy();
    for (const element of await responce.json()) {
        expect(typeof element.bookingid).toBe('number');
    }
})

test.skip('Create booking', async ({ request }) => {
    const currentDate: Date = new Date();
    const responce = await request.post('/booking', {
        data: {
            firstname: 'Johns',
            lastname: 'DoeS',
            totalprice: 100,
            depositpaid: 50,
            checkin: currentDate,
            checkout: currentDate.setDate(currentDate.getDate() + 10),
            additionalneeds: 'Any other needs the guest has'
        }
    });
})

