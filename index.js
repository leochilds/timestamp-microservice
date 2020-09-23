const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.get('/api/timestamp/:date_string?', function (req, res) {
    res.send(req.params);
})

app.listen(port, () => {
    console.log(`Timestamp Microservice listening at http://localhost:${port}`)
})

const getDateTimeFromString = (date_string) => {
    let date = date_string ? new Date(date_string) : new Date();
    return date;
}

