function somaListaRecursiva(lista: number[]): number {
    if (lista.length === 0) return 0;
    return lista[0] + somaListaRecursiva(lista.slice(1));
}

console.log(somaListaRecursiva([10, 20, 5, 3]));