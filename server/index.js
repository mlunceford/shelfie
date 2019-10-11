require('dotenv').config();
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env // DONT KNOW WHY THIS DIDNT WORK WHEN PUTTING THE SERVERPORT IN .ENV FILE
// const SERVER_PORT = 4000
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB connected');
});

//endpoints go here.


const port = SERVER_PORT;
app.listen(port, () => console.log(`its running on ${port}`))