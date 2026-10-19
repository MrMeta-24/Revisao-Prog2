interface PessoaAtendimento {
    senha: number;
    nome: string;
    horarioEntrada: Date;
}

class SistemaAtendimento {
    private fila: PessoaAtendimento[] = [];

    adicionar(pessoa: PessoaAtendimento): void {
        this.fila.push(pessoa);
    }

    chamarProximo(): PessoaAtendimento | undefined {
        return this.fila.shift();
    }

    consultarProximo(): PessoaAtendimento | undefined {
        return this.fila[0];
    }

    mostrarFila(): PessoaAtendimento[] {
        return this.fila;
    }

    quantidadeAguardando(): number {
        return this.fila.length;
    }
}