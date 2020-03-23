require('dotenv').config();

const API_KEY = process.env.STEPS_API_KEY;
const API_URL = 'https://maps.googleapis.com/maps/api/directions/json';

const request = require('request');

function getRequestURL(src, dest) {
    return `${API_URL}?origin=${src.replace(/\s/g, '+')}&destination=${dest.replace(/\s/g, '+')}&key=${API_KEY}`;
}

module.exports.getSteps = function (src, dest) {
    let url = getRequestURL(src, dest);


    return new Promise(function (resolve, reject) {
        console.log('Promise Start');
        request.get(url, function (error, response, body) {
            let resp = JSON.parse(body);
            console.log('Promise End', resp);
            resolve(resp);
        });
    });

};