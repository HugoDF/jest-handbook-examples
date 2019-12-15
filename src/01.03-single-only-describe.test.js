describe.only('my suite', () => {
  test.only('one of my .only test', () => {
    expect(1 + 1).toEqual(2);
  });
});
describe('my other suite', () => {
  // Should fail, but isn't even run
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
