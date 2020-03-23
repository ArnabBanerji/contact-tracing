require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const stepsService = require('./steps-service.js');
const app = express();
app.use(bodyParser.json());
const portNumber = 4500;


app.get('/mapkey', function (req, res) {

    res.send(process.env.STEPS_API_KEY);

});

app.get('/postmovement', function (req, res) {
    let reqCopy = JSON.parse(JSON.stringify(req.query));
    reqCopy.safe = true;

    stepsService.getSteps(reqCopy.startPosition, reqCopy.endPosition).then(function (steps) {
        reqCopy.steps = steps;


        res.json(reqCopy);
    }).catch(e => {
        res.json({'error': true})
    });
});

app.use('/', express.static('public'));

app.listen(4500, function () {
    console.log(`App started at ${portNumber}`)
});