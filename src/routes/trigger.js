const express = require('express');
const triggerQueue = require('../queues/triggerQueue');
const router = express.Router();

router.post('/', async (req, res) => {
    const { event_type, user_id, campaign_id, payload } = req.body;
    await triggerQueue.add(event_type, { event_type, user_id, campaign_id, payload });
    res.json({ success: true, message: 'Event Queued' });
});

module.exports = router;