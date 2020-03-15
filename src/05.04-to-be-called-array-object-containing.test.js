test('toHaveBeenCalledWith(arrayContaining)', () => {
  const myFunction = jest.fn();
  myFunction([1, 2, 3]);
  expect(myFunction).toHaveBeenCalledWith(expect.arrayContaining([2]));
});

test('toHaveBeenCalledWith(objectContaining)', () => {
  const myFunction = jest.fn();
  myFunction({
    name: 'Hugo',
    website: 'codewithhugo.com'
  });
  expect(myFunction).toHaveBeenCalledWith(
    expect.objectContaining({
      name: 'Hugo'
    })
  );
});

test('toHaveBeenCalledWith(nested object/array containing)', () => {
  const myFunction = jest.fn();
  myFunction([
    {age: 21, counsinIds: [1]},
    {age: 22, counsinIds: [1, 3]},
    {age: 23}
  ]);
  expect(myFunction).toHaveBeenCalledWith(
    expect.arrayContaining([
      expect.objectContaining({
        age: 22,
        counsinIds: expect.arrayContaining([3])
      })
    ])
  );
});
