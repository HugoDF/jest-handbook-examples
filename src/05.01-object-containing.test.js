const user = {
  id: 1,
  friends: [],
  name: 'Hugo',
  url: 'https://codewithhugo.com'
};
test('should have right id and name', () => {
  expect(user.id).toEqual(1);
  expect(user.name).toEqual('Hugo');
});
