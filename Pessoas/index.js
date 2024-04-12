const express = require('express')


const app = express()

app.use(express.json())


const pessoas = require('./routes/pessoas')
app.use(pessoas)





app.get("/", (req, res) =>{
    res.send("Aplicação rodando!")
})



app.listen(3000, () =>{
    console.log("Api rodando em http://localhost:3000")
})