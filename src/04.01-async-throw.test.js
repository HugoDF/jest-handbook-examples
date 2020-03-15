async function asyncThrowOrNot() {
  throw new Error('async-throw');
}

test('should throw return expect()', async () => {
  return expect(asyncThrowOrNot()).rejects.toEqual(new Error('async-throw'));
});

test('should throw await expect()', async () => {
  await expect(asyncThrowOrNot()).rejects.toEqual(new Error('async-throw'));
});
