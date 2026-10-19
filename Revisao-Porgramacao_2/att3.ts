function somar(a: number, b: number): number { return a + b; }
function subtrair(a: number, b: number): number { return a - b; }
function multiplicar(a: number, b: number): number { return a * b; }
function dividir(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero não permitida.");
    return a / b;
}
function potenciar(base: number, exp: number): number { return Math.pow(base, exp); }
function restoDivisao(a: number, b: number): number {
    if (b === 0) throw new Error("Divisão por zero não permitida.");
    return a % b;
}