const getCurrentDate = () => new Date();
test('It should create new date', () => {
  jest
    .spyOn(global, 'Date')
    .mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'));

  expect(getCurrentDate()).toEqual(new Date('2019-05-14T11:01:58.135Z'));
});
