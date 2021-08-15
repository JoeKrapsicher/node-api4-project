require('dotenv').config();


const server = require('./api/server')

const port = process.env.PORT;

server.listen(port, ()=> {
    console.log(`The wonderful magical server is listening on port${port}`)
})