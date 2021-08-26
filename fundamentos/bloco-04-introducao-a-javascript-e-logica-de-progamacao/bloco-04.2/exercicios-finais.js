/* percorra o array imprimindo todos os valores nele contidos com a função console.log()
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index])
} */

/* some todos os valores contidos no array e imprima o resultado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(index = 0; index < numbers.length; index +=1) {
    soma += numbers[index]
}

console.log(soma) */

/* calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

let mediaAritmetica = 0;

for(index = 0; index < numbers.length; index +=1) {
    mediaAritmetica += numbers[index]
}

mediaAritmetica = mediaAritmetica / numbers.length;

console.log(mediaAritmetica); */


/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

let mediaAritmetica = 0;

for(index = 0; index < numbers.length; index +=1) {
    mediaAritmetica += numbers[index]
}

mediaAritmetica = mediaAritmetica / numbers.length;

if(mediaAritmetica > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
} */


/* Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let onumero = 0;
for(index = 0; index < numbers.length; index +=1) {
    if(numbers[index] > onumero) {
        onumero = numbers[index];
    }

}

console.log(onumero) */


/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeDeNumerosImpares = 0;
for(index = 0; index < numbers.length; index +=1) {
    if(numbers[index]%2 == 1) {
        quantidadeDeNumerosImpares +=1;
    }
}

console.log(quantidadeDeNumerosImpares) */


/* Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let onumero = numbers[0];
for(index = 0; index < numbers.length; index +=1) {
    if(numbers[index] < onumero) {
        onumero = numbers[index];
    }
}

console.log(onumero);*/

/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for(index = 1 ; index < 26; index +=1) {
    numbers.push(index);
}

console.log(numbers) */


/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = [];

for(index = 1 ; index < 26; index +=1) {
    numbers.push(index);
}

let numbersDivididosPor2 = [];

for(index =0; index < numbers.length; index +=1) {
    numbersDivididosPor2.push(numbers[index]/2);
}

console.log(numbersDivididosPor2); */
