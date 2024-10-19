// Não é mais tudo!!!
const express = require('express')
const routers = require('./src/routes/pessoa')
// Instanciar um express
const app = express()

//middleware json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao wexpress
 app.use(routers)
const PORT=3000

// Inicializar o servidor
app.listen(3000, () => {
    console.info(`Servidor rodando na porta ${PORT}`)
})
 
// ou
// Variavel com a porta
// const Port
