require('dotenv').config();

const config = {
    port: process.env.PORT,
    baseUrl: process.env.BASE_URL
};

module.exports = config;