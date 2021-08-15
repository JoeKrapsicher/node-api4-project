const express = require('express');
// const helmet = require('helmet');

const server = express();

// server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
    try {
        console.log("message of the day posting")
        res.status(200).json({messageOfTheDay: process.env.MOTD})
    } catch (error) {
        console.log('ERROR', error);
        res.status(500).json({error: 'Cannot retrieve the Message'})
    }
})

module.exports = server;