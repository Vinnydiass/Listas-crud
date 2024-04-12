const express = require('express')

const router = express.Router()

let listaPessoas = [
    {
        id: 1,
        nome: "João",
        idade: "20",
        email: "joão@email.com",
        telefone: "61900010002"
    }
]



// Buscar 

router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// BUSCA PELO ID

router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoas => pessoas.id == id)  
    const pessoas = listaPessoas[index]
    res.json(pessoas)
})


// Criar dados de uma pessoa

router.post('/pessoas', (req, res) => {
    const novaPessoa = req.body

    const pessoas = {
        id: listaPessoas.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    listaPessoas.push(pessoas)

    res.json({ mensagem: "Pessoa cadastrada com sucesso!"})
})


router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoas => pessoas.id == id)
    listaPessoas.splice(index, 1)
    res.json({ mensagem: "Pessoas excluido com sucesso"})
})


router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaPessoas.findIndex(pessoas => pessoas.id == id)

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoas[index] = pessoaAlterada

    res.json({ mensagem: "Pessoa alterado com sucesso!"})

})







module.exports = router