const { Queue } = require('bullmq');
const connection = require('./redis');

// Create a new connection in every instance
const triggerQueue = new Queue('trigger-events', { connection });

module.exports = triggerQueue;