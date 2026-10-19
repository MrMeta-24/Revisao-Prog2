class Pessoa {
    constructor(public nome: string, public dataNascimento: string) {}

    apresentar(): string {
        return `Nome: ${this.nome}, Nasc: ${this.dataNascimento}`;
    }
}

class Aluno extends Pessoa {
    constructor(
        nome: string,
        dataNascimento: string,
        public matricula: string,
        public curso: string,
        public notas: number[]
    ) {
        super(nome, dataNascimento);
    }

    calcularMedia(): number {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }
}

class Professor extends Pessoa {
    constructor(
        nome: string,
        dataNascimento: string,
        public matricula: string,
        public disciplina: string
    ) {
        super(nome, dataNascimento);
    }
}