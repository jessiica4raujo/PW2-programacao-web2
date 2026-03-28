const prompt = require ("prompt-sync")();

let i = 1;
let fatorial = 1;

let numero = Number(prompt("Digite o número que você deseja descobrir o fatorial (!) aqui: "));

do{
    fatorial = fatorial * i;
    i++;
} while (i <= numero);

console.log("O fatorial do número" , numero ,  "é igual a " , fatorial ,"!");

/* Descrição do exercício 1 sobre fatorial aqui:  

Este exercício tem como objetivo mostrar o fatorial de um número escolhido pelo usuário usando a
estrutura de repetição do...while.

O programa solicita o valor que o usuário deseja descobrir o fatorial, converte para Number() e utiliza 
um laço do...while para realizar os cálculos.
A variável "fatorial" começa com valor 1 e vai sendo multiplicada pelos números de 1 até o número digitado.

A cada repetição, a variável "i" é incrementada até atingir o valor informado. Quando a condição deixa de ser 
verdadeira, o laço é encerrado e o resultado final é exibido no console.
*/

/*
const prompt = require ("prompt-sync")();

let numeral;
let soma = 0;
let i = 0;

do{
    numeral = Number(prompt("Digite um número (negativo para parar): "));

    if (numeral >=0){
        soma = soma + numeral;
        i++
    }

} while (numeral >=0);

console.log("Soma Total é igual a:" , soma);
console.log("Quantidade de números digitados: " , i);


/*  Descrição do exercício 2 sobre soma e quantidade de números aqui: 

Este exercício tem como objetivo somar números digitados pelo usuário e contar quantos números foram informados.
O programa continua pedindo valores até que seja digitado um número negativo. Quando isso acontece,a repetição é
encerrada e o resultado final é exibido no console, mostrando tanto a soma total quanto a quantidade de números digitados.

Foi utilizada a estrutura do...while, que tem como característica executar o bloco de código pelo menos uma vez antes de
verificar a condição. Dentro do laço, é feita uma verificação para garantir que apenas números maiores ou iguais a zero
sejam somados e contabilizados.

A variável "soma" acumula os valores digitados e a variável "i" registra a quantidade de números válidos informados pelo usuário.
*/






