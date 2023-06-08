const Prisma = require('../../../db/prisma');
const NotFoundError = require('../../middlewares/NotFoundError');


    async function DeleteReceitaService(id, usuarioId){
     
      const receitas = await  Prisma.receita.findMany({
        where: { usuarioId : usuarioId }
      });
 
      if (!receitas) {
        throw new NotFoundError('Usuário não tem nenhuma receita cadastrada');
      }
      const rece =    receitas.filter(element => {
        return element.id == id;
      });

      if(rece.length==0){
        throw new NotFoundError('receita nao pertence a esse usuario');
      }

      return await Prisma.receita.delete({
        where:{id : Number.parseInt(id)}
      });
    }

module.exports = {
  DeleteReceitaService
};