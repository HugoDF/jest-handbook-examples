/* eslint-disable unicorn/prevent-abbreviations */
async function logout(request, res) {
  request.session.data = null;
  return res.status(200).json();
}

const mockRequest = sessionData => {
  return {
    session: {data: sessionData}
  };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test('should set session.data to null', async () => {
  const request = mockRequest({username: 'hugo'});
  const res = mockResponse();
  await logout(request, res);
  expect(request.session.data).toBeNull();
});
test('should 200', async () => {
  const request = mockRequest({username: 'hugo'});
  const res = mockResponse();
  await logout(request, res);
  expect(res.status).toHaveBeenCalledWith(200);
});
