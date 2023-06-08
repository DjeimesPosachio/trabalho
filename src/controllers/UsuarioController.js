const DeleteUsuarioService = require("../services/Usuarios/DeleteUsuarioService");
const ListUsuarioService = require("../services/Usuarios/ListUsuarioService");
const UpdateUsuarioService = require("../services/Usuarios/UpdateUsuarioService");
const CreateUsuarioService = require("./../services/Usuarios/CreateUsuarioService")

class UserController  {

    async CreateHandle(req, res,next) {
        const {name,email,senha} = req.body;
        try {
            const createUsuarioService = new CreateUsuarioService();
            const usuario = await createUsuarioService.execute(name, email, senha);
            res.send(usuario);
        } catch (error) {
            next(error); // Passa o erro para o próximo middleware de tratamento de erros
        }
    }
    async UpdateHandle(req, res,next) {
        const {id,nome,email,senha} = req.body;
        try {
            const service = new UpdateUsuarioService();
            res.send( await service.execute(id,nome,email,senha));
        } catch (error) {
            next(error); // Passa o erro para o próximo middleware de tratamento de erros
        }
    }
    async ListHandle(req, res,next) {
      
        try {
            const service = new ListUsuarioService();
            res.send( await service.execute());
        } catch (error) {
            next(error); // Passa o erro para o próximo middleware de tratamento de erros
        }
    }
    async DeleteHandle(req, res,next) {
        const {id} = req.body;
        try {
            const service = new DeleteUsuarioService();
            res.send( await service.execute(id));
        } catch (error) {
            next(error); // Passa o erro para o próximo middleware de tratamento de erros
        }
    }
}

module.exports =UserController;