const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    connectionLimit: 15, 
    acquireTimeout: 60000, 
    connectTimeout: 30000,
    idleTimeout: 30000,
});

module.exports = pool;