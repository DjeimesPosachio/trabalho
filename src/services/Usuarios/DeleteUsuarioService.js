const NotFoundError = require('../../middlewares/NotFoundError');
const Prisma = require('./../../../db/prisma');

class DeleteUsuarioService {
    async execute(id){
      console.log(id)
      const usuario = await  Prisma.usuario.findUnique({
        where: { id:id }
      });
    
      if (!usuario) {
        throw new NotFoundError('Usuário não encontrado');
      }
      return await Prisma.usuario.delete({
        where:{
          id:id
        }
      });
    }
}

module.exports = DeleteUsuarioService;