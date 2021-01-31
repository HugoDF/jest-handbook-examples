/* eslint-disable import/no-anonymous-default-export */
import db from './03.01-db';

const keyPrefix = 'todos';
const makeKey = (key) => `${keyPrefix}:${key}`;

let autoId = 1;

export async function addTodo(todo) {
  const id = autoId++;
  const insertable = {
    ...todo,
    id
  };
  await db.set(makeKey(id), insertable);
}

export function getTodo(id) {
  return db.get(makeKey(id));
}

export default {
  addTodo,
  getTodo
};
