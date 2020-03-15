const mockFn = jest.fn();

function fnUnderTest(args1) {
  mockFn(args1);
}

beforeEach(() => {
  jest.clearAllMocks();
});

test('Testing once', () => {
  fnUnderTest('first-call');
  expect(mockFn).toHaveBeenCalledWith('first-call');
  expect(mockFn).toHaveBeenCalledTimes(1);
});
test('Testing twice', () => {
  fnUnderTest('second-call');
  expect(mockFn).toHaveBeenCalledWith('second-call');
  expect(mockFn).toHaveBeenCalledTimes(1);
});
