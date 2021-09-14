/* 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; 
2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".*/

/*
let player = {
    name : "Marta",
    lastName : "Silva",
    age : 34,
    medals : {
        golden : 2,
        silver : 3,
    }
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player["bestInTheWorld"].length + " vezes.")

console.log("A jogadora possui " + player.medals.golden + " de ouro e " +
player.medals.silver + " de prata.") */


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let nome in names) {
      console.log("Olá " + names[nome] + ".");
  };


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
      console.log(key, car[key]);
  };