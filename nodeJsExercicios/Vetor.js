// Exemplo 1 - Numero
let num = [1, 5, 6, 7];
console.log("O vetor tem " + num.length + " posições");
console.log(num[0]); 
console.log(num[2]); 
/* Nesses exercicios, foi usado o vetor, primeiro foi criado a variavel e colocado os valores
logo, com o num.length pedi a quantidade de posições existentes no vetor.
Depois, com o console pedi o valor declarado em tal posicao (Ex:num[2] = 6)
*/

// Exercicio 2 
const prompt = require("prompt-sync")();

let numeros = [];
for (let i = 0; i < 3; i++) {
    numeros[i] = Number(prompt("Digite um número: "));
}

console.log("Números digitados:");

for (let i = 0; i < 3; i++) {
    console.log(numeros[i]);
}


/* Descrição do exercício 1 sobre vetores de 3 elementos aqui: 

Este exercício tem como objetivo pedir três números ao usuário e guardá-los em um vetor,
utilizando a estrutura de repetição for.

Primeiramente, é criado o vetor "numeros". Em seguida, o laço for começa com a variável
i = 0 e repete enquanto i < 3. Dentro do laço, o número digitado é armazenado em cada
posição do vetor.

Depois, outro for é usado para mostrar no console os números que foram digitados.
Quando a condição deixa de ser verdadeira, o laço é encerrado automaticamente.

*/