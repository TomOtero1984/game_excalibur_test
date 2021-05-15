var express = require('express');
var path = require('path');
var app = express();

const port = 3000

// app.use('/public', express.static( __dirname + '/public'));
app.use('/node_modules', express.static( __dirname + '/node_modules'));
app.use('/build', express.static( __dirname + '/build'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})