const mockObjectId = data => {
  return {
    name: data,
    toString: () => data
  };
};

test('toString() returns right value', () => {
  expect(mockObjectId('foo').toString()).toEqual('foo');
});
test('it’s an object', () => {
  const actual = mockObjectId('foo');
  expect(typeof actual).toEqual('object');
});
test('two objectIds with same value are equal', () => {
  const first = mockObjectId('foo');
  const second = mockObjectId('foo');
  expect(first).toEqual(second);
});
