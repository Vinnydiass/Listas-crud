const express = require('express')
const router = express.Router()


let listaAmigos = []


// BUSCAR 
router.get('/amigos', (req, res) => {
    res.json(listaAmigos)
})

// BUSCA ID
router.get('/amigos/:id', (req, res) => {
    const id = req.params.id
    const amigos = listaAmigos[id]
    res.json(amigos)
})

// CADASTRAR 
router.post('/amigos', (req, res) => {
    const amigos = req.body
    listaAmigos.push(amigos.nome)
    res.status(201).json({ mensagem: "Amigo criado com sucesso!" })
})

// EXCLUIR 
router.delete('/amigos/:id', (req, res) => {
    const id = req.params.id
    listaAmigos.splice(id, 1)
    res.json({ mensagem: "Amigo excluido com sucesso!"})
})

// ATUALIZAR 
router.put('/amigos/:id', (req, res) => {
    const id = req.params.id
    const amigos = req.body
    listaAmigos[id] = amigos.nome
    res.json({ mensagem: "Amigo atualizado com sucesso!" })
})

module.exports = router