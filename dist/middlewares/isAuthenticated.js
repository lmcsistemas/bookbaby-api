"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    console.log('pasosu no middleware');
    //receber o token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    console.log(authToken);
    const [, token] = authToken.split(" ");
    console.log(token);
    try {
        //validar o token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        console.log('sub ', sub);
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
    return next();
}
exports.isAuthenticated = isAuthenticated;
