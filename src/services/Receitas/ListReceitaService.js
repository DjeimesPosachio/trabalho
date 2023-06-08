const Prisma = require('../../../db/prisma');
    async function ListReceitasServices(usuarioId){
      return await Prisma.receita.findMany({
        where: {
          usuarioId:Number.parseInt(usuarioId)
        }}
      );
    }
    module.exports = {ListReceitasServices};