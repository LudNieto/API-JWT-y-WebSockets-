const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    let token;

    if (authHeader !== undefined && authHeader !== null) {
        // Dividimos el encabezado por el espacio y obtenemos la segunda parte (el token)
        const parts = authHeader.split(' ');

        // Verificamos si el encabezado tiene el formato esperado: "Bearer <token>"
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;