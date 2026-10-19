class Produto {
    constructor(
        public codigo: string,
        public nome: string,
        public preco: number,
        public quantidadeEstoque: number
    ) {}

    adicionarEstoque(qtd: number): void {
        this.quantidadeEstoque += qtd;
    }

    retirarEstoque(qtd: number): void {
        if (qtd > this.quantidadeEstoque) {
            throw new Error("Quantidade superior ao estoque disponível.");
        }
        this.quantidadeEstoque -= qtd;
    }

    alterarPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }

    valorTotalArmazenado(): number {
        return this.preco * this.quantidadeEstoque;
    }
}

const p1 = new Produto("001", "Caderno", 15.0, 50);
const p2 = new Produto("002", "Caneta", 2.5, 200);
const p3 = new Produto("003", "Mochila", 120.0, 10);