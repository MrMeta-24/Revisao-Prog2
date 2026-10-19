interface Tarefa {
    id: number;
    descricao: string;
    concluida: boolean;
}

class GerenciadorTarefas {
    private tarefas: Tarefa[] = [];
    private nextId = 1;

    adicionar(descricao: string): void {
        this.tarefas.push({ id: this.nextId++, descricao, concluida: false });
    }

    listar(): Tarefa[] { return this.tarefas; }

    buscar(id: number): Tarefa | undefined {
        return this.tarefas.find(t => t.id === id);
    }

    alterar(id: number, novaDescricao: string): void {
        const tarefa = this.buscar(id);
        if (tarefa) tarefa.descricao = novaDescricao;
    }

    remover(id: number): void {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
    }

    quantidadeTotal(): number { return this.tarefas.length; }

    marcarConcluida(id: number): void {
        const tarefa = this.buscar(id);
        if (tarefa) tarefa.concluida = true;
    }
}