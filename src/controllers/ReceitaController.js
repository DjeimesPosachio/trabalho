const {CreateReceitaService} = require("./../services/Receitas/CreateReceitaService")
const {ListReceitasServices} = require("./../services/Receitas/ListReceitaService")
const {DeleteReceitaService} = require("./../services/Receitas/DeleteReceitaService")
const {UpdateReceitaService} = require("./../services/Receitas/UpdateReceitaService")

    async function CreateHandle(req, res,next) {
        const {nome,descricao,tempodepreparo,usuarioId} = req.body;
        try {
            res.send( await CreateReceitaService(nome,descricao,tempodepreparo,usuarioId));
        } catch (error) {
            next(error)
        }
       
    }
    async function UpdateHandle(req, res,next) {
        const {id,nome,descricao,tempodepreparo} = req.body;
        try {
            res.send( await UpdateReceitaService(id,nome,descricao,tempodepreparo));
        } catch (error) {
            next(error)
        }
    }
    async function ListHandle(req, res,next) {
        const {usuarioId} = req.query;
     

        try {
            res.send( await ListReceitasServices(usuarioId));
        } catch (error) {
            next(error)
        }
    }
    async function DeleteHandle(req, res,next) {
        const {id, usuarioId} = req.query;
        try {
            return res.send( await DeleteReceitaService(id, usuarioId));
        } catch (error) {
            next(error)
        }
    }

module.exports = {
    CreateHandle,
    ListHandle,
    UpdateHandle,
    DeleteHandle
};