// Factorial de 10 con "while/if/break"
let i = 1;
let factorial = 1;

while (i <= 15) {
    console.log(factorial)
    i++;
    factorial = factorial*i;
    if (i > 10) {
        break
    }
}
