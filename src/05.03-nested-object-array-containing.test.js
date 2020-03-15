const users = [
  {id: 1, name: 'Hugo'},
  {id: 2, name: 'Francesco'}
];

test('we should have ids 1 and 2', () => {
  expect(users).toEqual(
    expect.arrayContaining([
      expect.objectContaining({id: 1}),
      expect.objectContaining({id: 2})
    ])
  );
});
