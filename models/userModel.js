const pool = require('../config/confDB');
const bcrypt = require('bcryptjs');

const User = {
    create: async (username, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        let conn;
        try {
            conn = await pool.getConnection();
            const res = await conn.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
            return res;
        } finally {
            if (conn) conn.end();
        }
    },
    findByUsername: async (username) => {
        let conn;
        try {
            conn = await pool.getConnection();
            const res = await conn.query("SELECT * FROM users WHERE username = ?", [username]);
            return res[0];
        } finally {
            if (conn) conn.end();
        }
    }
};

module.exports = User;
