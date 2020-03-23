const express = require('express');
const app = express();
const portNumber = 4500;


app.get('/postmovement/:userName/:startCoords/:endCoords/:startTime/:endTime', function (req, res) {

    let reqCopy = JSON.parse(JSON.stringify(req.params));


    reqCopy.safe = true;

    res.json(reqCopy);

});

app.use('/', express.static('public'));


app.listen(4500, function () {


    console.log(`App started at ${portNumber}`)
});