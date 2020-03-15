const mockFn = jest.fn();

function fnUnderTest(args1) {
  return mockFn(args1) ? 'Truth' : 'Falsehood';
}

test('It should return correct output on true response from mockFn', () => {
  mockFn.mockImplementationOnce(() => true);
  expect(fnUnderTest('will-it-work')).toEqual('Truth');
});
test('It should return correct output on false response from mockFn', () => {
  mockFn.mockImplementationOnce(() => false);
  expect(fnUnderTest('will-it-work')).toEqual('Falsehood');
});
