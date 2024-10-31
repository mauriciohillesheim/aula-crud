//criando a classe controller da Pessoa
const ServicePessoa = require('../services/pessoa')
 
class ControllerPessoa {
 //todas as funções do controller, recebem req, res
 
 
    async GetPessoas(req,res){
        //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
 try {
    const pessoas =  await ServicePessoa.GetPessoas()
    res.send({ msg: pessoas })
   
 
   
 } catch (error) {
    //todo cath vai ser assim
    res.status(500).send({msg: error.message})
   
 }
}
   async CreatePessoa(req,res) {
             
 try {
   
    const {name, password, email } = req.body
 
    const pessoa = await ServicePessoa.CreatePessoa(name, password, email)
    res.send({ msg: pessoa })
   
 } catch (error) {
    //todo cath vai ser assim
    res.status(500).send({msg: error.message})
   
    }
    }
 
    async UpdatePessoa (req,res)    {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
   
      try {
 
        const id = req.params.id
        const name = req.body.name
        const password = req.body.password
        const email = req.body.email
 
        const pessoas = await ServicePessoa.UpdatePessoa(id,name, password, email)
       res.send({ msg: pessoas })
       
    } catch (error) {
       //todo cath vai ser assim
       res.status(500).send({msg: error.message})
    }  
 
    }
    async DeletePessoa (req,res)    {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
   
        try {
            const id = req.params.id
            await ServicePessoa.DeletePessoa(id)
       res.status(204).send()
       
    } catch (error) {
       //todo cath vai ser assim
       res.status(500).send({msg: error.message})
    }
    }
}
 
module.exports = new ControllerPessoa()