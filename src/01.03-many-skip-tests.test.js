describe('my suite', () => {
  test('one of my tests', () => {
    expect(1 + 1).toEqual(2);
  });
  test.skip('skipped failing test', () => {
    expect(1 + 2).toEqual(3);
  });
  test.skip('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
