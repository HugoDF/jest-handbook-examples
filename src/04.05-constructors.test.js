const applicationWork = createUser => {
  return async (req, res) => {
    const {name} = req.body;
    const user = await createUser(name, new Date());
    return res.status(201).json(user);
  };
};

test('should call createUser with right types', async () => {
  const req = {
    body: {
      name: 'User Name'
    }
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(() => res)
  };
  const mockCreateUser = jest.fn();
  await applicationWork(mockCreateUser)(req, res);
  expect(mockCreateUser).toHaveBeenCalledWith(
    expect.any(String),
    expect.any(Date)
  );
});
