test('It should create correct now Date', () => {
  const date = new Date('2023-05-14');
  jest.useFakeTimers().setSystemTime(date);
  expect(new Date()).toEqual(date);
});
