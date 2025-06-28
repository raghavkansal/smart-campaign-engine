const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const allowedUsers = [
    { user_id: 'U123', name: 'Test User 1' },
    { user_id: 'U456', name: 'Test User 2' },
    { user_id: 'U789', name: 'Test Admin' }
]

router.post('/', (req, res) => {
    const { user_id } = req.body;
    const user = allowedUsers.find(u => u.user_id === user_id);
    if (!user) {
        return res.status(403).json({ error: 'User not allowed' });
    }

    const token = jwt.sign({ user_id: user.user_id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({token: token});
});

module.exports = router;