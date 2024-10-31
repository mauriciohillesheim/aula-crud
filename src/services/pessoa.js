const ModelPessoa = require('../models/pessoa')

//criando a classe servicePessoa
class ServicePessoa {
    async GetPessoas( ) {
        return ModelPessoa.findAll()
    }
    async CreatePessoa(name, password, email) {     //fazer verificações - se mandou o name
        // mauricio
        if (!name ) {

            throw new Error('Todos os dados são obrigatórios')
        }
       
        // se tudo estiver ok, cria a pessoa no banco de dados
        return ModelPessoa.create({ name, password, email })
    }
    
    async UpdatePessoa(id, name, password, email) {        
        if (!id) {
            throw new Error("ID é obrigatório")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error('Pessoa não encontrada')  // mauricio
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password ||  pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
        
        // return ModelPessoa.Update(
        //     { name, password, email }
        // , { where: { id } })
    }
    async DeletePessoa(id) {
        if(!id) {
            throw new Error('ID é obrigatório')  // mauricio
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error('Pessoa não encontrada')  // mauricio
        }
        return ModelPessoa.destroy({where: {id} })
    }
}
module.exports = new ServicePessoa()