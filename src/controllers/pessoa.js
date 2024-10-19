const ServicePessoa = require('../services/pessoa')

// Criando a classe controller da paessoa 
class ControllerPessoa{
    //TODAS as funções do controller, recebem req, res
    GetPessoas(req, res) {
        //Todas as funções do controller tem try catch
        try{
            const pessoas = ServicePessoa.GetPessoas()
            res.send({ msg: pessoas})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    CreatePessoa(req, res){
        try{
            const name = req.body.name
            const pessoa = ServicePessoa.CreatePessoa(name)
            res.send({ msg: pessoa})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    UpdatePessoa(req,res){
        try{
            const id = req.params.id
            const name = req.body.name
            const pessoa = ServicePessoa.UpdatePessoa(id, name)
            res.send({ msg: pessoa})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    
    DeletePessoa(req,res){
        try{
            const id = req.params.id
            const pessoa = ServicePessoa.CreatePessoa(id) 
            res.send({ msg: pessoa})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
}
module.exports = new ControllerPessoa()