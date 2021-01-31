jest.mock('./03.01-db', () => ({
  get: jest.fn(),
  set: jest.fn()
}));

import mockDb from './03.01-db';
import {addTodo, getTodo} from './03.01-lib.esm';

test('ESM Named Export > addTodo > inserts with new id', async () => {
  await addTodo({name: 'new todo'});
  expect(mockDb.set).toHaveBeenCalledWith('todos:1', {
    name: 'new todo',
    id: 1
  });
});

test('ESM Named Export > getTodo > returns output of db.get', async () => {
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
