jest.mock('./03.03-db', () => ({
  get: jest.fn()
}));

const mockDb = require('./03.03-db');
const lib = require('./03.03-lib-mockable.cjs.js');

let {makeKey, getTodo} = lib;
test('CommonJS > Mocking destructured makeKey doesn’t work', async () => {
  const mockMakeKey = jest.fn(() => 'mock-key');
  makeKey = mockMakeKey;
  await getTodo(1);
  expect(makeKey).not.toHaveBeenCalled();
  expect(mockDb.get).not.toHaveBeenCalledWith('mock-key');
});

test('CommonJS > Mocking lib.makeKey works', async () => {
  const mockMakeKey = jest.fn(() => 'mock-key');
  lib.makeKey = mockMakeKey;
  await getTodo(1);
  expect(mockMakeKey).toHaveBeenCalledWith(1);
  expect(mockDb.get).toHaveBeenCalledWith('mock-key');
});

test('CommonJS > Spying lib.makeKey works', async () => {
  const makeKeySpy = jest
    .spyOn(lib, 'makeKey')
    .mockImplementationOnce(() => 'mock-key');
  await getTodo(1);
  expect(makeKeySpy).toHaveBeenCalled();
  expect(mockDb.get).toHaveBeenCalledWith('mock-key');
});
