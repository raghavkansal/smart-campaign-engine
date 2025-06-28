const express = require('express');
const { getLogs } = require('../utils/logger');

const router = express.Router();

router.get('/:id/logs', (req, res) => {
    const logs = getLogs(req.params.id);
    res.json({ campaign_id: req.params.id, logs });
});

module.exports = router;