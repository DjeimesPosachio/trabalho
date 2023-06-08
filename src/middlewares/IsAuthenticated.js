const jwt = require("jsonwebtoken");

 function IsAuthenticated(req, res, next) {

    const authtoken = req.headers.authorization;
    
    if (!authtoken) {
        return res.status(401).send("NAO AUTORIZADO").end();
    }
    const [, token] = authtoken.split(" ")

    try {
        const { sub } = jwt.verify(token, process.env.JWT_SECRET)
        //variavel dentro do request criada com interface 
        req.user_id = sub
        return next();
    } catch (error) {
        return res.status(401).send("token alterado").end();
    }

}

module.exports = IsAuthenticated;