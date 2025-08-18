const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Import Routes
const authorsRouter = require('./routes/authors');

const app = express();

// Middleware 
app.use(cors());            // Allow all origins 
app.use(express.json());    // Parse JSON bodies
app.use(morgan('dev'));     // Log requests to console

// Health check, used for Dev ENV
app.get('/health_check', (req, res) => {
    res.json({ status: 'ok'});
})

// API routes
app.use('/api/authors', authorsRouter);

// 404 handler 
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' })
});

// Error handler 
app.use((err, req, res) => {
    console.error('Error', err.message);
    res.status(500).json({ error: 'Something went wrong' })
});

module.exports = app;
