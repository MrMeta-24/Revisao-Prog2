async function consultarCEP(cep: string) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        console.log("Endereço:", dados);
    } catch (erro) {
        console.error("Falha ao buscar o CEP:", erro);
    }
}

consultarCEP("01001000");

/*
1-Qual URL foi utilizada?
 [https://viacep.com.br/ws/01001000/json/](https://viacep.com.br/ws/01001000/json/)

2-Qual método HTTP foi utilizado?
 GET

3-Qual código HTTP representa uma requisição bem-sucedida?
 200 OK

4-Em qual formato os dados foram recebidos?
 JSON

5-Qual é a diferença entre uma requisição e uma resposta HTTP?
 A requisição é a mensagem enviada pelo cliente (navegador/aplicação) solicitando algo ao servidor, enquanto a 
 resposta é o retorno enviado pelo servidor contendo o status e os dados solicitados.
*/