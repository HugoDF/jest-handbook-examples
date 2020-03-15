/* eslint-disable unicorn/prevent-abbreviations */
const bcrypt = require('bcrypt');

const users = [
  {
    name: 'hugo',
    password: '$2a$10$IYTsvP51gvUfM2SvZ47acekm05qdyxQbVW5Yy2q3dPp1EipWx7clm'
  },
  {
    name: 'guest',
    password: '$2a$10$6rfA.JiURAnuGhVAKpaoneXhsOuKBBRfKDRUgfLxMnVvQUWK5u6h2'
  }
];

function getUser(username) {
  return users.find(({name}) => name === username);
}

async function login(req, res) {
  try {
    const {username, password} = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({message: 'username and password are required'});
    }

    const user = getUser(username);
    if (!user) {
      return res.status(401).json({message: 'No user with matching username'});
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({message: 'Wrong password'});
    }

    req.session.data = {username};
    return res.status(201).json();
  } catch (error) {
    console.error(
      `Error during login of "${req.body.username}": ${error.stack}`
    );
    res.status(500).json({message: error.message});
  }
}

const mockRequest = (sessionData, body) => ({
  session: {data: sessionData},
  body
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test('should 400 if username is missing from body', async () => {
  const req = mockRequest({}, {password: 'boss'});
  const res = mockResponse();
  await login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    message: 'username and password are required'
  });
});
test('should 400 if password is missing from body', async () => {
  const req = mockRequest({}, {username: 'hugo'});
  const res = mockResponse();
  await login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    message: 'username and password are required'
  });
});
test('should 401 with message if user with passed username does not exist', async () => {
  const req = mockRequest(
    {},
    {
      username: 'hugo-boss',
      password: 'boss'
    }
  );
  const res = mockResponse();
  await login(req, res);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({
    message: 'No user with matching username'
  });
});
test('should 401 with message if passed password does not match stored password', async () => {
  const req = mockRequest(
    {},
    {
      username: 'guest',
      password: 'not-good-password'
    }
  );
  const res = mockResponse();
  await login(req, res);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({
    message: 'Wrong password'
  });
});
test('should 201 and set session.data with username if user exists and right password provided', async () => {
  const req = mockRequest(
    {},
    {
      username: 'guest',
      password: 'guest-boss'
    }
  );
  const res = mockResponse();
  await login(req, res);
  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalled();
  expect(req.session.data).toEqual({
    username: 'guest'
  });
});
