const fs = require('fs');

module.exports = {
    secret: fs.readFileSync(__dirname + '/public.pem', { encoding: 'utf8', flag: 'r' }),
};
