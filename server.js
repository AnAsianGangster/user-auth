const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/models/index.model');
db.sequelize.sync();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({
        message: 'Root endpoint hit',
    });
});

require('./app/routes/index.route')(app);

const port = process.env.port || 5000;
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
