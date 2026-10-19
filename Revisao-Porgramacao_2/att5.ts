function fibonacciRecursivo(n: number): number {
    if (n <= 1) return n;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function fibonacciIterativo(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, temp = 0;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}