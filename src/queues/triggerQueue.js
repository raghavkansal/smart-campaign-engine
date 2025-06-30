const { Queue } = require('bullmq');
const redis = require('./redis');

const redisURL = new URL(process.env.REDIS_URL);

// Create a new connection in every instance
const triggerQueue = new Queue('trigger-events', { connection: redis.options });

module.exports = triggerQueue;