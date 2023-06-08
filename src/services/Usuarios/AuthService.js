const NotFoundError = require('./../../middlewares/NotFoundError');
const GetUserByEmailService = require('./GetUserByEmailService')
const jwt = require('jsonwebtoken');
 
class AuthUserService {


    async execute( email, password ) {
        const serviceUser = new GetUserByEmailService();
        const user = await serviceUser.execute(email, password);

        if (!user) {
            throw new NotFoundError("Email nao existe ou senha incorreta");
        }

        //gerar token
     
        const token = jwt.sign(
            {
                id: user.id ,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )
        return {
            token: token
        }
    }
}

module.exports = AuthUserService;