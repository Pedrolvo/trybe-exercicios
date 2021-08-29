/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 4;
let asteriscos = "";
let contador = 0;
for(index = 0; index < n; index += 1){
    asteriscos = asteriscos + "*";
}

for(index = 0; index < n; index += 1){
    if(contador < n){
        console.log(asteriscos)
    }
} */


/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;
let asteriscos = "";
let contador = 0;
for(index = 0; index < n; index += 1){
    asteriscos = asteriscos + "*";
    if(contador < n){
        console.log(asteriscos)
    }
} */


/* Agora inverta o lado do triângulo.

let n = 5;
let asteriscos = "";
let contador = n;
for(index = 0; index <= n; index += 1){
    for(posicao = 0; posicao <= n; posicao += 1){
        if(posicao < contador){
            asteriscos = asteriscos + " ";
        } else {
            asteriscos = asteriscos + "*";
        }
    }
    console.log(asteriscos)
    asteriscos = "";
    contador -= 1;
} */

/* faça uma pirâmide com n asteriscos de base

let n = 7;
let asteriscos = "";
let meioPiramide = (n +1)/2;
let espacoEsquerda = meioPiramide;
let espacoDireita = meioPiramide;
for(index = 0; index < meioPiramide; index += 1){
    for(posicao = 0; posicao <= n; posicao += 1){
        if(posicao >= espacoEsquerda && posicao <= espacoDireita){
            asteriscos = asteriscos + "*";
        } else {
            asteriscos = asteriscos + " ";
        }
    }
    console.log(asteriscos)
    asteriscos = "";
    espacoDireita += 1;
    espacoEsquerda -= 1;
} */

/* Faça um programa que diz se um número definido numa variável é primo ou não.
let numero = 61;
let nDivisoesRzero = 0;

for(divisor = 1; divisor <= numero+1; divisor += 1){
    if(Number.isInteger(numero/divisor) === true){
        nDivisoesRzero += 1;
    } else if(nDivisoesRzero === 2 && (divisor-1) === numero){
        console.log("Número Primo.")
    } else if((divisor-1) === numero) {
        console.log("Não é número primo.")
    }
} */