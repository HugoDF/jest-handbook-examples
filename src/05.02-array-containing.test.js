const oddArray = [1, 3, 5, 7, 9, 11, 13];

test('should start correctly', () => {
  expect(oddArray).toContain(1);
  expect(oddArray).toContain(3);
  expect(oddArray).toContain(5);
  expect(oddArray).toContain(7);
  expect(oddArray).toContain(9);
});
