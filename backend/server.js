const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = process.env.PORT || 4000
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);
app.get('/', (req, res) => {
    res.send('Received a GET HTTP method');
    console.log("GET is evoked");
});
app.post('/', (req, res) => {
    res.send('Received a POST HTTP method');
    console.log(req.body.text);
});
app.put('/', (req, res) => {
    res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
    res.send('Received a DELETE HTTP method');
});
app.post('/users', (req, res) => {
    res.send('POST HTTP method on users resource');
});

app.put('/users/:userId', (req, res) => {
    res.send(
        `PUT HTTP method on users/${req.params.userId} resource`,
    );
});