describe('my suite', () => {
  test('one of my tests', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe.skip('my other suite', () => {
  test('my only true test', () => {
    expect(1 + 1).toEqual(1);
  });
});
