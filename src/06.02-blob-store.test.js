/* eslint-disable unicorn/prevent-abbreviations */
const express = require('express');
const request = require('supertest');

const blobStore = (redisClient, router = new express.Router()) => {
  router.get('/store/:key', async (req, res) => {
    const {key} = req.params;
    const value = req.query;
    await redisClient.setAsync(key, JSON.stringify(value));
    return res.send('Success');
  });
  router.get('/:key', async (req, res) => {
    const {key} = req.params;
    const rawData = await redisClient.getAsync(key);
    return res.json(JSON.parse(rawData));
  });
  return router;
};

const initBlobStore = (
  mockRedisClient = {
    getAsync: jest.fn(() => Promise.resolve()),
    setAsync: jest.fn(() => Promise.resolve())
  }
) => {
  const app = express();
  app.use(blobStore(mockRedisClient));
  return app;
};

describe('GET /store/:key with params', () => {
  test('It should call redisClient.setAsync with key route parameter as key and stringified params as value', async () => {
    const mockRedisClient = {
      setAsync: jest.fn(() => Promise.resolve())
    };
    const app = initBlobStore(mockRedisClient);
    await request(app).get('/store/my-key?hello=world&foo=bar');
    expect(mockRedisClient.setAsync).toHaveBeenCalledWith(
      'my-key',
      '{"hello":"world","foo":"bar"}'
    );
  });
});

describe('GET /:key', () => {
  test('It should call redisClient.getAsync with key route parameter as key', async () => {
    const mockRedisClient = {
      getAsync: jest.fn(() => Promise.resolve('{}'))
    };
    const app = initBlobStore(mockRedisClient);
    await request(app).get('/my-key');
    expect(mockRedisClient.getAsync).toHaveBeenCalledWith('my-key');
  });
  test('It should return output of redisClient.getAsync with key route parameter as key', async () => {
    const mockRedisClient = {
      getAsync: jest.fn(() => Promise.resolve('{}'))
    };
    const app = initBlobStore(mockRedisClient);
    const response = await request(app).get('/my-key');
    expect(response.body).toEqual({});
  });
});
