let directions = require('./mock-directions');


const fs = require('fs');


let stepPoints = [];


let sampleObj = {"city": "NYC", "longitude": -73.935242, "latitude": 40.730610, color: 'FF0000'};


let steps = directions.routes[0].legs[0].steps;

for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    let samplePoint = JSON.parse(JSON.stringify(sampleObj));
    samplePoint.city = `S ${i + 1}`;
    samplePoint.longitude = step.start_location.lng;
    samplePoint.latitude = step.start_location.lat;
    samplePoint.color = 'FF0000';

    stepPoints.push(JSON.parse(JSON.stringify(samplePoint)));

    samplePoint.city = `E ${i + 1}`;
    samplePoint.longitude = step.end_location.lng;
    samplePoint.latitude = step.end_location.lat;
    samplePoint.color = '0000FF';
    stepPoints.push(JSON.parse(JSON.stringify(samplePoint)));
}

fs.writeFileSync('./points.json', JSON.stringify(stepPoints, null, 2));