/* eslint-disable unicorn/prevent-abbreviations */
const express = require('express');
const request = require('supertest');

function encodeReferer(req, res, next) {
  if (req.headers.referer) {
    req.referer = Buffer.from(req.headers.referer).toString('base64');
  }

  next();
}

const initMiddleware = () => {
  const app = express();
  app.use(encodeReferer);
  app.use('/', (req, res) => {
    res.send(req.referer);
  });
  return app;
};

test('encodeReferer should base64 referer if set', async () => {
  const app = initMiddleware();
  const res = await request(app)
    .get('/')
    .set('Referer', 'codewithhugo.com');
  expect(res.text).toEqual('Y29kZXdpdGhodWdvLmNvbQ==');
});

test('encodeReferer should work fine if referer is not set', async () => {
  const app = initMiddleware();
  const res = await request(app).get('/');
  expect(res.text).toEqual('');
});
