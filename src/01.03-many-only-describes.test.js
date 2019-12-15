describe.only('my suite', () => {
  test('one of my .only test', () => {
    expect(1 + 1).toEqual(2);
  });
});
describe.only('other suite', () => {
  test('other of my .only test', () => {
    expect(1 + 2).toEqual(3);
  });
});
describe('skipped other suite', () => {
  // Should fail, but isn't even run
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
