function throws() {
  throw new Error('throwing');
}

test('should throw if passed true', () => {
  expect(throws.bind(null)).toThrow(new Error('throwing'));
});
