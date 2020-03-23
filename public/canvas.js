function getBoundingRect(data) {
    let left = Infinity, right = -Infinity;
    let top = Infinity, bottom = -Infinity;

    for (let {latitude, longitude} of data) {
        if (left > latitude) left = latitude;
        if (top > longitude) top = longitude;
        if (right < latitude) right = latitude;
        if (bottom < longitude) bottom = longitude;
    }
    return {x: left, y: top, width: right - left, height: bottom - top};
}

function draw(ctx, data) {
    let boundingRect = getBoundingRect(data);
    let scale = Math.min(canvas.width, canvas.height);

    for (let {latitude, longitude, color} of data) {
        let x = (latitude - boundingRect.x) / boundingRect.width * scale;
        let y = (longitude - boundingRect.y) / boundingRect.height * scale;
        ctx.fillStyle = '#' + color;
        ctx.fillRect(x - 5, y - 5, 2, 2);
    }
}

let data = [
    {
        "city": "S 1",
        "longitude": 88.4360351,
        "latitude": 22.643042,
        "color": "FF0000"
    },
    {
        "city": "E 1",
        "longitude": 88.43613850000001,
        "latitude": 22.6430842,
        "color": "0000FF"
    },
    {
        "city": "S 2",
        "longitude": 88.43613850000001,
        "latitude": 22.6430842,
        "color": "FF0000"
    },
    {
        "city": "E 2",
        "longitude": 88.4332455,
        "latitude": 22.6411753,
        "color": "0000FF"
    },
    {
        "city": "S 3",
        "longitude": 88.4332455,
        "latitude": 22.6411753,
        "color": "FF0000"
    },
    {
        "city": "E 3",
        "longitude": 88.4329447,
        "latitude": 22.6402585,
        "color": "0000FF"
    },
    {
        "city": "S 4",
        "longitude": 88.4329447,
        "latitude": 22.6402585,
        "color": "FF0000"
    },
    {
        "city": "E 4",
        "longitude": 88.433977,
        "latitude": 22.6295357,
        "color": "0000FF"
    },
    {
        "city": "S 5",
        "longitude": 88.433977,
        "latitude": 22.6295357,
        "color": "FF0000"
    },
    {
        "city": "E 5",
        "longitude": 88.43200379999999,
        "latitude": 22.6176213,
        "color": "0000FF"
    },
    {
        "city": "S 6",
        "longitude": 88.43200379999999,
        "latitude": 22.6176213,
        "color": "FF0000"
    },
    {
        "city": "E 6",
        "longitude": 88.42036379999999,
        "latitude": 22.6027521,
        "color": "0000FF"
    },
    {
        "city": "S 7",
        "longitude": 88.42036379999999,
        "latitude": 22.6027521,
        "color": "FF0000"
    },
    {
        "city": "E 7",
        "longitude": 88.41867950000001,
        "latitude": 22.6029909,
        "color": "0000FF"
    },
    {
        "city": "S 8",
        "longitude": 88.41867950000001,
        "latitude": 22.6029909,
        "color": "FF0000"
    },
    {
        "city": "E 8",
        "longitude": 88.39934009999999,
        "latitude": 22.5952618,
        "color": "0000FF"
    },
    {
        "city": "S 9",
        "longitude": 88.39934009999999,
        "latitude": 22.5952618,
        "color": "FF0000"
    },
    {
        "city": "E 9",
        "longitude": 88.40294890000001,
        "latitude": 22.5502687,
        "color": "0000FF"
    },
    {
        "city": "S 10",
        "longitude": 88.40294890000001,
        "latitude": 22.5502687,
        "color": "FF0000"
    },
    {
        "city": "E 10",
        "longitude": 88.3664053,
        "latitude": 22.5429897,
        "color": "0000FF"
    },
    {
        "city": "S 11",
        "longitude": 88.3664053,
        "latitude": 22.5429897,
        "color": "FF0000"
    },
    {
        "city": "E 11",
        "longitude": 88.3661424,
        "latitude": 22.5428321,
        "color": "0000FF"
    },
    {
        "city": "S 12",
        "longitude": 88.3661424,
        "latitude": 22.5428321,
        "color": "FF0000"
    },
    {
        "city": "E 12",
        "longitude": 88.3647553,
        "latitude": 22.5339707,
        "color": "0000FF"
    },
    {
        "city": "S 13",
        "longitude": 88.3647553,
        "latitude": 22.5339707,
        "color": "FF0000"
    },
    {
        "city": "E 13",
        "longitude": 88.3652458,
        "latitude": 22.531153,
        "color": "0000FF"
    },
    {
        "city": "S 14",
        "longitude": 88.3652458,
        "latitude": 22.531153,
        "color": "FF0000"
    },
    {
        "city": "E 14",
        "longitude": 88.3660455,
        "latitude": 22.5257109,
        "color": "0000FF"
    },
    {
        "city": "S 15",
        "longitude": 88.3660455,
        "latitude": 22.5257109,
        "color": "FF0000"
    },
    {
        "city": "E 15",
        "longitude": 88.363117,
        "latitude": 22.5257374,
        "color": "0000FF"
    },
    {
        "city": "S 16",
        "longitude": 88.363117,
        "latitude": 22.5257374,
        "color": "FF0000"
    },
    {
        "city": "E 16",
        "longitude": 88.35725459999999,
        "latitude": 22.5248292,
        "color": "0000FF"
    },
    {
        "city": "S 17",
        "longitude": 88.35725459999999,
        "latitude": 22.5248292,
        "color": "FF0000"
    },
    {
        "city": "E 17",
        "longitude": 88.3573153,
        "latitude": 22.5235632,
        "color": "0000FF"
    },
    {
        "city": "S 18",
        "longitude": 88.3573153,
        "latitude": 22.5235632,
        "color": "FF0000"
    },
    {
        "city": "E 18",
        "longitude": 88.3584363,
        "latitude": 22.5205975,
        "color": "0000FF"
    },
    {
        "city": "S 19",
        "longitude": 88.3584363,
        "latitude": 22.5205975,
        "color": "FF0000"
    },
    {
        "city": "E 19",
        "longitude": 88.3584118,
        "latitude": 22.5199899,
        "color": "0000FF"
    },
    {
        "city": "S 20",
        "longitude": 88.3584118,
        "latitude": 22.5199899,
        "color": "FF0000"
    },
    {
        "city": "E 20",
        "longitude": 88.3571918,
        "latitude": 22.5200455,
        "color": "0000FF"
    }
];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

draw(ctx, data);