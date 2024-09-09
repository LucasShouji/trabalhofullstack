const express = require('express');
const app = express();
//const axios = require('axios')
const port = 3000;
const rotas = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/api', rotas);

// app.get('/', (req,res) => {
//     res.send('Hello world');
// });

// app.get('/consulta-cep/:cep', async (req, res) => {
//     const cep = req.params;
//     try{
//         const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
//         if(cepRegex.test(cep)){
//             res.status(400).send("CEP inválido. Formato deve ser XXXXX-XXX")
//             return
//         }
//         console.log(cep)
//         const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
//         res.json(response.data)
//     }catch(err){
//         console.error("Erro ao fazer a requisição:", err)
//         res.status(500).send('Erro ao consultar o CEP')
//     }
// })

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})