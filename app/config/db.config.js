require('dotenv').config();

module.exports = {
    HOST: process.env.MYSQL_DB_HOST,
    USER: process.env.MYSQL_DB_USER,
    PASSWORD: process.env.MYSQL_DB_USER_PASSWORD,
    PORT: process.env.MYSQL_DB_PORT,
    DB: process.env.DB_NAME,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
