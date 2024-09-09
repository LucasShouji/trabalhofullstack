const express = require('express');
const app = express();
const port = 3000;
const rotas = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
