const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send({ hi: 'there' });
})

//Environment variables
//PRODUCTION environment - process.env.PORT - sent by Heroku
//DEVELOPMENT environment - default
const PORT = process.env.PORT || 5000;

app.listen(PORT);