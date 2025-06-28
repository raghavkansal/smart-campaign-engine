const { Redis } = require("ioredis");

module.exports = new Redis(process.env.REDIS_URL, {
    family: 0, // Force IPv4 
    maxRetriesPerRequest: null
});