const thunkify = (fn) => () => fn();

test('curry should return a function', () => {
  expect(thunkify(() => {})).toEqual(expect.any(Function));
});
