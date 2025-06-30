const { Redis } = require('ioredis');
const { URL } = require('url');

const redisURL = new URL(process.env.REDIS_URL || 'redis://localhost:6379');

const redis = new Redis({
  host: redisURL.hostname,
  port: Number(redisURL.port),
  username: redisURL.username || undefined,
  password: redisURL.password || undefined,
  family: 0,
  maxRetriesPerRequest: null
});

module.exports = redis;
