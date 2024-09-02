document.getElementById('formEndereco').addEventListener('submit', async (event) => {
    event.preventDefault();

    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const adressData = {
        rua,
        cidade,
        estado,
        cep
    };

    try{
        const response = await fetch('http://localhost:3000/api/enderecos', {
        method: 'Post',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(adressData)
        });

        const result = await response.json();

        if(response.ok){
            document.getElementById('message').innerText = 'Endereço enviado com sucesso!';
            document.getElementById('formEndereco').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error){
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});