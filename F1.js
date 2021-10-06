function generateFibonacci(limit){
    const fib = [0,1];
    for(let i = 2; i < limit; i++){
        fib[i] = fib[i - 1] + fib[i - 2];

    }
    return fib;
}
const fibSerie = generateFibonacci(10);
console.log(fibSerie);
