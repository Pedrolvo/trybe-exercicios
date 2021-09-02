let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


//    Imprima no console uma mensagem de boas-vindas para a personagem acima,
//    incluindo seu nome. Valor esperado no console:

// console.log("Bem-vinda, " + info.personagem + ".");

//  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o
//  valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no
//  console:

info.recorrente = "Sim";
// console.log(info.recorrente);

// Faça um for/in que mostre todas as chaves do objeto.

/*for(let key in info){
    console.log(key);
} */

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

/*for(let key in info){
    console.log(info[key]);
} */

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }



 
  function palindrometro (word) {
    let result = false;
    let reverse = word.split('').reverse().join('');
    if (reverse === word) {
      result = true;
    }
    return result;
  }

palindrometro('arara')


function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))


  function nomeMaior (array) {
      let indiceNomeMaior = 0;
      for(let indice in array){
        if(array[indiceNomeMaior].length < array[indice].length){
            indiceNomeMaior = indice;
        }
      }
      return array[indiceNomeMaior];
  }

  console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


  function somaAteNumero(N) {
    let somaTotal = 0;  
    for(index = 1; index <= N; index +=1){
        somaTotal = somaTotal + index;
    }
    return somaTotal;
  }

  console.log(somaAteNumero(10))



  function finalIgual(word, ending) {
      let arrayDaWord = word.split("");
      let comparador = [];
      for(index = word.length-1; index > ending.length; index -=1){
        comparador.push[index];
      }
      comparador.reverse().join("");
      if(comparador === ending) {
          return true;
      } else {
          return false;
      }
  }
  console.log(finalIgual('trybe', 'be'))