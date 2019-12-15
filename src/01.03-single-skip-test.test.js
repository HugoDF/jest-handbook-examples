describe('my suite', () => {
  test('my only true test', () => {
    expect(1 + 1).toEqual(2);
  });
  // Should fail, but isn't even run
  test.skip('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
