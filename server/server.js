const express = require('express');
const bodyParser = require('body-parser');
const node_mailer = require('./mailer.js');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

// Health
app.get('api/health', (req, res) => {
    res.send({ status: 'UP' });
});

// POST
app.post('/send', (req, res) => {
    console.log('REQUEST ', req.body);
    node_mailer.mailer(req.body);
    res.sendStatus( 200);
});