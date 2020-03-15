jest.mock('sequelize');
const Model = require('./02.04-model');

test('It should not throw when passed a model containing an empty list of meetings', () => {
  const model = new Model();
  model.meetings = [];
  expect(model.isAvailable.bind(model, new Date(Date.now()))).not.toThrow();
});

test('It should not throw when passed a model containing an empty list of meetings', () => {
  const model = Object.assign(new Model(), {
    meetings: []
  });
  expect(model.isAvailable.bind(model, new Date(Date.now()))).not.toThrow();
});
