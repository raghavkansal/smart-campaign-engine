# Smart Notification & Trigger Engine for Campaign Events

## Deployed Link : 
https://smart-campaign-engine-production.up.railway.app

## Postman API Documentation with sample payload
https://documenter.getpostman.com/view/23833836/2sB2xFfnZp

## Github Link
https://github.com/raghavkansal/smart-campaign-engine

## Setup guide
- setup .env file by referencing .env.default file
- start redis instance
- start server
```
npm install
npm run start
```
- start processing queue jobs with help of workers
```
node src/queues/worker.js
```