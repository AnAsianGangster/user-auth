const express = require('express');

const app = express();

require('./externalMiddleware.server')(app);

app.get('/', function (req, res) {
    res.json({
        message: 'Root endpoint hit',
    });
});

require('../routes/index.route')(app);

const port = process.env.port || 5000;
app.listen(port, function () {
    console.log('Server is running on port', port);
});

module.exports = app;
