document.getElementById('formCadastro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const rua = document.getElementById('pessoa').value;
    const cidade = document.getElementById('nome').value;
    const estado = document.getElementById('cpf').value;
    const cep = document.getElementById('telefone').value;

    const addressData = {
        pessoa,
        nome,
        cpf,
        telefone
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