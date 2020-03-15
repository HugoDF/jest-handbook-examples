let state = 0;
const counter = {
  add(value) {
    state += value;
  },
  getCount() {
    return state;
  }
};

const singleAdd = counter => {
  counter.add(10);
};

test('singleAdd > jest.fn() toHaveBeenCalledWith() single call', () => {
  const mockCounter = {
    add: jest.fn()
  };
  singleAdd(mockCounter);
  expect(mockCounter.add).toHaveBeenCalledWith(10);
});

test('singleAdd > jest.spyOn() toHaveBeenCalledWith() single call', () => {
  const addSpy = jest.spyOn(counter, 'add');
  singleAdd(counter);
  expect(addSpy).toHaveBeenCalledWith(10);
});
