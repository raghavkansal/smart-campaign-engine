require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { authMiddleware } = require('./src/middlewares/auth');  // completed 
// const { setupWebSocket } = require('./src/websocket/socket');
const loginRoutes =  require('./src/routes/login');
const triggerRoutes = require('./src/routes/trigger');
const logsRoutes = require('./src/routes/logs');
// const adminRoutes = require('./src/routes/admin');

const app = express();
const server = http.createServer(app);
// setupWebSocket(server);

app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);


// app.use(authMiddleware); // JWT protection
app.use('/trigger-event', authMiddleware, triggerRoutes);
app.use('/campaign', authMiddleware, logsRoutes);
// app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
