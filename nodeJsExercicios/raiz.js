const prompt = require ("prompt-sync")();

let numero = Number(prompt("Digite o número desejado para calcular a raiz quadrada √: "));

if(numero >= 0){
    let raiz = Math.sqrt(numero);
    console.log("A raiz quadrada de √" , numero , "é igual a √" , raiz);
}else{
    console.log("Não existe raiz quadrada real para número negativo.");
}


/* Descrição do exercício 1 sobre Raíz aqui:  

Este exercício tem como o objetivo calcular a raiz quadrada de um número escolhido
pelo usuário. 

O número é armazenado na varíavel "numero" que foi convertida para o tipo 
Number() e é realizada a operação  utilizando o operador de raízes: Math.sqrt dentro de 
uma estrutura condicional if...else, no qual diz para o usuário se o número escolhido tem
raiz ou se não tem raíz existente.

Como foi necessário a entrada de dados utilizei a biblioteca prompt-sync.

Interessante falar que a variável foi convertida para o tipo Number() pois quando não há esse
ou outro tipo exemplificado, o node.js entende como string(texto) o que seria erronêo para contas
matemáticas principalmente.

*/



const prompt = require ("prompt-sync")();

let area = Number(prompt("Digite a área do círculo aqui: "));

let raio = Math.sqrt(area / Math.PI);
let diametro = raio * 2;

console.log("O raio do círculo é de: " , raio);
console.log("O diâmetro do círculo é de: " , diametro);


/*  Descrição do exercício 2 sobre raíz aqui:  

Este exercício tem como objetivo calcular o raio e o diâmetro de um círculo
a partir da área informada pelo usuário.

Ele se enquadra na parte de raiz, pois utiliza a função Math.sqrt(),
que serve para calcular a raiz quadrada. Nesse caso, ela é usada para
descobrir o raio do círculo com base na fórmula da área (A = πr²).

Também foi necessário utilizar o "prompt-sync" para solicitar os dados
ao usuário e armazenar o valor digitado em uma variável.
Após os cálculos, o programa exibe o raio e o diâmetro no console.
*/



