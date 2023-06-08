const Prisma = require('./../../../db/prisma');

class ListUsuarioService {
    async execute(){
      return  await Prisma.usuario.findMany();
    }
}

module.exports = ListUsuarioService;