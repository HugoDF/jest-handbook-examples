/* eslint-disable unicorn/prevent-abbreviations */
async function checkAuth(request, res) {
  if (!request.session.data) {
    return res.status(401).json();
  }

  const {username} = request.session.data;
  return res.status(200).json({username});
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

test('should 401 if session data is not set', async () => {
  const request = mockRequest();
  const res = mockResponse();
  await checkAuth(request, res);
  expect(res.status).toHaveBeenCalledWith(401);
});
test('should 200 with username from session if session data is set', async () => {
  const request = mockRequest({username: 'hugo'});
  const res = mockResponse();
  await checkAuth(request, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({username: 'hugo'});
});
