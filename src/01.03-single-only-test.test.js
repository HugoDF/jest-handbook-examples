describe('my suite', () => {
  test.only('my only true test', () => {
    expect(1 + 1).toEqual(2);
  });
  // Should fail, but isn't even run
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
