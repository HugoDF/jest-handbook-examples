const appWork = createUser => {
  return async (request, response) => {
    const {name} = request.body;
    const user = await createUser(name, new Date());
    return response.status(201).json(user);
  };
};

test('should call createUser with right types', async () => {
  const request = {
    body: {
      name: 'User Name'
    }
  };
  const response = {
    status: jest.fn(() => response),
    json: jest.fn(() => response)
  };
  const mockCreateUser = jest.fn();
  await appWork(mockCreateUser)(request, response);
  expect(mockCreateUser).toHaveBeenCalledWith(
    expect.any(String),
    expect.any(Date)
  );
});
