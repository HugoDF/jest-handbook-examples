const user = {
  id: 1,
  name: 'Hugo',
  friends: [3, 5, 22]
};

test('user 3 should be a friend of user', () => {
  expect(user).toEqual(
    expect.not.objectContaining({
      url: 'https://codewithhugo.com'
    })
  );
  // Can't be your own friend?
  expect(user.friends).toEqual(expect.not.arrayContaining([1]));
});
