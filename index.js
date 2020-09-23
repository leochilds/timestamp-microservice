const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.get('/api/timestamp/:date_string?', function (req, res) {
    const date_time = getDateTimeFromString(req.params.date_string);
    const response = isNaN(date_time) ?
        {"error" : "Invalid Date" } :
        {"unix": date_time.getTime(), "utc" : date_time.toUTCString() };
        res.send(response);
})

app.listen(port, () => {
    console.log(`Timestamp Microservice listening at http://localhost:${port}`)
})

const getDateTimeFromString = (date_string) => {
    let date = date_string ? new Date(date_string) : new Date();
    return date;
}

