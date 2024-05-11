require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

const Tarefa = mongoose.model('tarefa', {nome: String})

app.get('/hello', (req, res) => {
    res.json("Hello")
})

//Buscar todos
app.get('/tarefas', async (req, res) => {
    const tarefa = await Tarefa.find()
    res.json(tarefa)
})

//Find ID
app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

//New Post
app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({nome: req.body.nome})
    await tarefa.save()
    res.json(tarefa)
})

//Update
app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {nome: req.body.nome}, {new:true})
    res.json(tarefa)
})

//Delete
app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json()
})

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@backend.bgpkpuv.mongodb.net/?retryWrites=true&w=majority&appName=Backend`)
    .then(() => console.log("Conectado ao meu MongoDB!"))
    .catch(err => console.log("Erro ao conectar no meu MongoDB: ", err))



app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})
