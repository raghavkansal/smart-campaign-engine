const { Worker } = require('bullmq');
const connection = require('./redis');
const { logDispatch } = require('../utils/logger');


const worker = new Worker('trigger-events', async job => {
    const { event_type, user_id, campaign_id, payload } = job.data;

    // for failing some jobs.
    const shouldFail = Math.random() < 0.3;
    if (shouldFail) {
        throw new Error('Simulated Failure');
    }
    //////////////////////////

    const log = {
        timestamp: new Date(),
        status: 'Success',
        attempt: job.attemptsMade + 1,
        data: job.data
    };

    logDispatch(campaign_id, log);
}, {
    connection,
    attempts: 3,
    backoff: {
        type: 'exponential',
        delay: 1000,
    }
});

worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
    const { campaign_id } = job.data;
    const log = {
        timestamp: new Date(),
        status: 'Failed',
        attempt: job.attemptsMade,
        error: err.message,
        data: job.data
    };

    logDispatch(campaign_id, log);
});


module.exports = worker;
