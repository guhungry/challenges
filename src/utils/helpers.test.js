import { donationAmount, responseToJson, summaryDonations } from './helpers';

describe('helpers', function() {
  test('`summaryDonations` should calculate donations correctly [1, 2, 3, 4] = 10', function() {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test('`donationAmount` should get correct amount', function() {
    expect(donationAmount({ amount: 555 })).toEqual(555);
  });

  test('`donationAmount` should return 0 when data invalid', function() {
    expect(donationAmount({ })).toEqual(0);
  });

  test('`responseToJson` should call json() on response object', function() {
    const sut = { json: jest.fn() }

    responseToJson(sut)

    expect(sut.json.mock.calls.length).toEqual(1);
  });
});
