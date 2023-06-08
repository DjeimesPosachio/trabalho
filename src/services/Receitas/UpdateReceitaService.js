const Prisma = require('../../../db/prisma');
const NotFoundError = require('../../middlewares/NotFoundError');

    async function UpdateReceitaService(id,nome,descricao,tempodepreparo){
     
      const receita =  await Prisma.receita.findUnique({
          where: {id}
      });
      if(!receita){
        throw new NotFoundError("Receita nao existe")
      }
      return await Prisma.receita.update({
        where:{id:id},
        data:{
          nome:nome,
          descricao:descricao,
          tempodepreparo:Number.parseInt(tempodepreparo),
        }
      });
    }

module.exports = {UpdateReceitaService};