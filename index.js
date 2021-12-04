const express = require('express');

require('dotenv').config();

const app = express();

app.use('/', require('./routes'))

app.listen(5000, () => {
    console.log("App started...")
})

module.exports = app;
