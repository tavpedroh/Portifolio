
async function contatoDados(nome,email,assunto,mensagem) {
    const conexao = await fetch("http://localhost:3000/dados",{
        method: "POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify({
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        })
    }) 
    return conexao.json();
}

export const conectaApi = {
    contatoDados
}