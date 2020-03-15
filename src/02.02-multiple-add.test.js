let state = 0;
const counter = {
  add(value) {
    state += value;
  },
  getCount() {
    return state;
  }
};

const multipleAdd = counter => {
  counter.add(15);
  counter.add(20);
};

test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
  const mockCounter = {
    add: jest.fn()
  };
  multipleAdd(mockCounter);
  expect(mockCounter.add).toHaveBeenCalledWith(15);
  expect(mockCounter.add).toHaveBeenCalledWith(20);
});
test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
  const addSpy = jest.spyOn(counter, 'add');
  multipleAdd(counter);
  expect(addSpy).toHaveBeenCalledWith(15);
  expect(addSpy).toHaveBeenCalledWith(20);
});
