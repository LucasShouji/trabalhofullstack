document.getElementById('formCadastro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const pessoa = document.getElementById('pessoa').value;
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const addressData = {
        pessoa: pessoa,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
    };

    try {
        const response = await fetch('http://localhost:3000/api/cadastros', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressData)
        });

        const result = await response.json();

        if(response.ok) {
            document.getElementById('message').innerText = 'Cadastro enviado com sucesso!';
            document.getElementById('formCadastro').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch(error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }

});
