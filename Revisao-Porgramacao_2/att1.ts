function maiorValor(numeros: number[]): number {
    return Math.max(...numeros);
}

function menorValor(numeros: number[]): number {
    return Math.min(...numeros);
}

function mediaValores(numeros: number[]): number {
    if (numeros.length === 0) return 0;
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / numeros.length;
}

function qtdPares(numeros: number[]): number {
    return numeros.filter(n => n % 2 === 0).length;
}

function qtdImpares(numeros: number[]): number {
    return numeros.filter(n => n % 2 !== 0).length;
}

const lista = [10, 15, 3, 8, 22, 7];
console.log("Maior:", maiorValor(lista));
console.log("Menor:", menorValor(lista));
console.log("Média:", mediaValores(lista));
console.log("Pares:", qtdPares(lista));
console.log("Ímpares:", qtdImpares(lista));