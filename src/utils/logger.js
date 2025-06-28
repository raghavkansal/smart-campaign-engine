const fs = require('fs');
const path = require('path');

const logs = {};

function logDispatch(campaignId, data) {
    if (!logs[campaignId]) {
        logs[campaignId] = [];
    }
    logs[campaignId].push(data);

    const filePath = path.join(__dirname, '../../logs', `${campaignId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(logs[campaignId], null, 2));
}

function getLogs(campaignId) {
    const filePath = path.join(__dirname, '../../logs', `${campaignId}.json`);
    if(fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath);
        return JSON.parse(raw);
    }
    return [];
}

module.exports = { logDispatch, getLogs };