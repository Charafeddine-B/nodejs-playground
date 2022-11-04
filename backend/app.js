const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Welcome</h2>')
})

module.exports = app