const express = require('express');
// const helmet = require('helmet');

const server = express();

// server.use(helmet());
server.use(express.json());

server.get('/api/users', async (req, res) => {
    try {
        console.log("message of the day posting")
        res.status(200).json({messageOfTheDay: process.env.MOTD})
    } catch (error) {
        console.log('ERROR', error);
        res.status(500).json({error: 'Cannot retrieve the Message'})
    }
})

server.post('/api/register', async (req, res) => {
    try {
        const newUser = req.body
        console.log("registering users")
        res.status(201).json({users: newUser})
    } catch {
        console.log('ERROR', error);
        res.status(500).json({error: 'Cannot retrieve the Message'})
    }
})

server.post('/api/register', async (req, res) => {
    const newUser = req.body
    try {
        console.log("logging in user")
        if(!newUser){
            res.status(422).json({ message:"needs to be a user"});
        } else {
            res.status(201).json({users: newUser, message: "Welcome!"})
        }
    } catch {
        console.log('ERROR', error);
        res.status(500).json({error: 'Cannot retrieve the Message'})
    }
})


module.exports = server;