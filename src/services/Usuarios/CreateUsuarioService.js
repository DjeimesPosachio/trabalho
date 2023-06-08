const NotFoundError = require('./../../middlewares/NotFoundError');
const Prisma = require('./../../../db/prisma');

class CreateUsuarioService {

    async execute(name, email, senha) {
       
        if (!name || !email || !senha) {
            throw new NotFoundError('campos vazio');
        }
        const existingUser = await Prisma.usuario.findUnique({
             where: { 
                email:email 
            },
         });
        if (existingUser) {
          throw new NotFoundError('Este email já está em uso.');
        }
       
        return await Prisma.usuario.create({
            data: {
                name:name,
                email:email,
                senha:senha
            }
        });
    }

}

module.exports = CreateUsuarioService;