jest.mock('./02.06-db', () => ({
  get: jest.fn(),
  set: jest.fn()
}));

const mockDb = require('./02.06-db');
const {addTodo, getTodo} = require('./02.06-lib.cjs');

test('CommonJS > addTodo > inserts with new id', async () => {
  await addTodo({name: 'new todo'});
  expect(mockDb.set).toHaveBeenCalledWith('todos:1', {
    name: 'new todo',
    id: 1
  });
});

test('CommonJS > getTodo > returns output of db.get', async () => {
  mockDb.get.mockResolvedValueOnce({
    id: 1,
    name: 'todo-1'
  });

  const expected = {
    id: 1,
    name: 'todo-1'
  };
  const actual = await getTodo(1);

  expect(mockDb.get).toHaveBeenCalledWith('todos:1');
  expect(actual).toEqual(expected);
});
