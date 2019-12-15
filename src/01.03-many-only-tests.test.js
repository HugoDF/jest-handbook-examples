describe('my suite', () => {
  test.only('one of my .only test', () => {
    expect(1 + 1).toEqual(2);
  });
  test.only('other of my .only test', () => {
    expect(1 + 2).toEqual(3);
  });
  // Should fail, but isn't even run
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
