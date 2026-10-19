function validarNome(nome: string): boolean {
    return nome.trim().length > 0;
}

function validarIdade(idade: number): boolean {
    return idade >= 14 && idade <= 120;
}

function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenha(senha: string): boolean {
    return senha.length >= 8;
}

function cadastrarUsuario(nome: string, idade: number, email: string, senha: string): void {
    if (!validarNome(nome)) {
        console.log("Erro: O nome não pode estar vazio.");
        return;
    }
    if (!validarIdade(idade)) {
        console.log("Erro: A idade deve estar entre 14 e 120 anos.");
        return;
    }
    if (!validarEmail(email)) {
        console.log("Erro: E-mail inválido.");
        return;
    }
    if (!validarSenha(senha)) {
        console.log("Erro: A senha deve ter pelo menos 8 caracteres.");
        return;
    }
    console.log("Cadastro realizado com sucesso!");
}