function throwOrNot(shouldThrow = false) {
  if (shouldThrow) {
    throw new Error('shouldThrow was true');
  }

  return 'success';
}

test('should throw if passed true', () => {
  try {
    throwOrNot(true);
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
