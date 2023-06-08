const Prisma = require('./../../../db/prisma');

 class GetUserByEmailService {

    async execute(email, senha) {
      const usuario =  await Prisma.usuario.findFirst({
        where: { 
          email:email,
          senha:senha,
         }
      });
      return usuario;
    }
}

module.exports = GetUserByEmailService;