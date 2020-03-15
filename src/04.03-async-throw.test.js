async function asyncThrowOrNot() {
  throw new Error('error');
}

test('should throw if passed true return expect()', async () => {
  return expect(asyncThrowOrNot()).rejects.toEqual(new Error('error'));
});

test('should throw if passed true await expect()', async () => {
  await expect(asyncThrowOrNot()).rejects.toEqual(new Error('error'));
});
