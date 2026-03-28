let i = 1;
    console.log("Aqui você verá os números de ordem crescente de 1-10:");
while (i<= 10) {
    console.log(i);
    i++;
}

/* Descrição do exercício 1 sobre números 1-10 aqui: 

Este exercício tem o objetivo de escrever no console os números em ordem crescente de 1-10
usando a estrutura de repetição while.

Primeiramente, a variável "i" é iniciada com o valor 1. O laço while executa enquanto a condição
i <= 10 for verdadeira.
Dentro do bloco, o valor de "i" é mostrado no console e, em seguida, incrementado com i++ para que o
número aumente a cada repetição.

Quando a condição deixa de ser verdadeira (ou seja, quando i passa de 10), o laço é encerrado automaticamente.
*/


const prompt = require ("prompt-sync")();

let numero = Number(prompt("Digite números para somar (digite número 0(zero) para parar): "));
let soma = 0;

while (numero != 0){
    soma = soma + numero;
    numero = Number(prompt("Digite outro número (digite número 0(zero) para parar: "));
}

console.log("A soma total é  de: " + soma);



/* Descrição do exercício 2 sobre soma de números (0 para parar) aqui: 

Este exercício tem como objetivo somar números digitados pelo usuário até que seja informado o valor
0 para encerrar.

O programa utiliza a estrutura de repetição while, que continua executando enquanto a condição 
numero != 0 for verdadeira.

A cada repetição, o valor digitado é acumulado na variável "soma". Em seguida, o programa solicita um
novo número. Quando o usuário digita 0, a condição se torna falsa e o laço é encerrado.

Ao final, o total da soma é exibido no console.
*/


