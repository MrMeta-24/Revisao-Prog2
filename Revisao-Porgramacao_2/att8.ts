class HistoricoNavegador {
    private pilha: string[] = [];

    visitar(pagina: string): void {
        this.pilha.push(pagina);
    }

    paginaAtual(): string | undefined {
        return this.pilha[this.pilha.length - 1];
    }

    voltar(): string | undefined {
        if (this.pilha.length > 1) {
            this.pilha.pop();
            return this.paginaAtual();
        }
        return "Nenhuma página anterior.";
    }

    exibirHistorico(): string[] {
        return [...this.pilha].reverse();
    }
}