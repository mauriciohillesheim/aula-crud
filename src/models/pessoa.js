// const nomes = new Array("Ana", "Sebastião")
//criando a classe servicePessoa
const database = require('../config/database')
class ModelPessoa {
    constructor(){
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },        
            name: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true 
            },
            password: {
                type: database.db.Sequelize.STRING
            }
        })
    }
    // GetPessoas() {
    //     return nomes
    // }
    // CreatePessoa(name) {
    //     return nomes.push(name)
    // }
    // UpdatePessoa(id, name) {
    //     return nomes[id] = name
    // }
    // DeletePessoa(id) {
    //     return nomes.splice(id, 1)
    // }
}
module.exports = new ModelPessoa().model