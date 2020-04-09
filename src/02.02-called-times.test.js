let count = 0;
const counter = {
  increment() {
    count += 1;
  },
  getCount() {
    return count;
  }
};
const app = (counter) => {
  counter.increment();
};

test('app() with mock counter .toHaveBeenCalledTimes(1)', () => {
  const mockCounter = {
    increment: jest.fn()
  };
  app(mockCounter);
  expect(mockCounter.increment).toHaveBeenCalledTimes(1);
});
test('app() with jest.spyOn(counter) .toHaveBeenCalledTimes(1)', () => {
  const incrementSpy = jest.spyOn(counter, 'increment');
  app(counter);
  expect(incrementSpy).toHaveBeenCalledTimes(1);
});
