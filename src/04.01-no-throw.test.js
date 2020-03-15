function throws() {
  return 'success';
}

test('should not throw', () => {
  expect(throws.bind(null)).not.toThrow(new Error('throwing'));
});
