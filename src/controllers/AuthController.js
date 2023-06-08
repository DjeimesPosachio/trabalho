const AuthService = require("./../services/Usuarios/AuthService")
 class AuthController {
    async handle(req, res, next) {
        try {
            const { email, senha } = req.body;
            const service = new AuthService();
            return res.json(await service.execute(email, senha ))
        } catch (error) {
            next (error)
        }
        
    }
}

module.exports =AuthController;