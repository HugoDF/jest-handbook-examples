describe('my suite', () => {
  test('one of my test', () => {
    expect(1 + 1).toEqual(2);
  });
});
describe.skip('other suite', () => {
  // Should fail, but isn't even run
  test('other of my .skip test', () => {
    expect(1 + 2).toEqual(4);
  });
});
describe.skip('skipped other suite', () => {
  // Should fail, but isn't even run
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
