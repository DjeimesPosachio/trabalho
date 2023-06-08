const Prisma = require('../../../db/prisma');
const NotFoundError = require('./../../middlewares/NotFoundError');



    async function CreateReceitaService(name,descricao,tempodepreparo,usuarioId){

        if(!name||!descricao||!tempodepreparo||!usuarioId){
            throw new NotFoundError('campos vazio');
        }

        return  await Prisma.receita.create({
            data:{
                nome :name,
                descricao :descricao,
                tempodepreparo :tempodepreparo,
                usuarioId      : usuarioId
            }
        });
    }
module.exports = {CreateReceitaService};