const axios = require('axios');
const { Cadastro } = require('../models');
console.log(Cadastro)


exports.createCadastroCpf = async (req, res) => {
    try {
        const {pessoa, nome, cpf, telefone} = req.body;
        
        const novoCadastro = await Cadastro.create({
            pessoa,
            nome,
            cpf,
            telefone
        });

        res.status(201).json(novoCadastro);
    }catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar cadastro', details: error.message});
    }
};

exports.getAllCadastros = async (req, res) => {
    try {
        const cadastros = await Cadastro.findAll();
        res.status(200).json(cadastros);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastros', details: error.message});
    }
};

exports.getCadastroByCpf = async (req, res) => {
    try {
        const { Cpf } = req.params;
        const cadastro = await Cadastro.findByPk(Cpf);

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'});
        }

        res.status(200).json(cadastro);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message});
    }
}

exports.updateCadastro = async (req, res) => {
    try {
        const { Cpf } = req.params;
        const {pessoa, nome, telefone} = req.body;

        const cadastro = await Cadastro.findByPk(Cpf);

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        cadastro.pessoa = pessoa;
        cadastro.nome = nome;
        cadastro.telefone = telefone;
        

        await cadastro.save();

        res.status(200).json(cadastros)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}

exports.deleteCadastro = async (req, res) => {
    try {
        const { Cpf } = req.params;
        const cadastro = await Cadastro.findByPk(Cpf)

        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        await cadastro.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}
