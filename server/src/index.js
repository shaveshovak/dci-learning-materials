require('dotenv').config();

const http = require('http');
const mongoose = require('mongoose');
const app = require('./server');

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGODB_URI;

mongoose.set('strictQuery', true);

async function start() {
    try {
        await mongoose.connect(mongoUri, {
            autoIndex: true,
            serverSelectionTimeoutMS: 10000
        });
        console.log('✅ Connected to MongoDB');
        
        const server = http.createServer(app);
        
        server.listen(port, () => {
            console.log(`🚀 Server listening on http://localhost:${port}`);
        })

    } catch (err) {
        console.error('Mongo connection error:', err.message);
        process.exit(1);
    }
}

start();