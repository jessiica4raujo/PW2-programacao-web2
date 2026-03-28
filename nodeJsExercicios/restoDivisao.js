const prompt = require ("prompt-sync")();

let numero = Number(prompt("Digite o número que você deseja descobrir se ímpar ou par aqui: "));

if(numero % 2 === 0){
    console.log("O número" , numero , "é PAR!");
} else {
    console.log("O número" , numero , "é ÍMPAR!");
}

/*  Descrição do exercício 1 sobre números pares e ímpares aqui: 

Este exercício tem como objetivo verificar se um número é par ou ímpar, com foco no cálculo
do resto da divisão.

O programa utiliza o chamado operador módulo (%) para descobrir o resto da divisão do número por 2.
Se o resto for igual a 0, significa que o número é par. Caso o resto seja diferente de 0, o número é
considerado ímpar.

A verificação é feita com a estrutura if...else e o resultado é exibido no console.
*/


/*
const prompt = require ("prompt-sync")();

let numeral = Number(prompt("Digite o número que você deseja saber se é múltiplo de 4: "));

if(numeral % 4 === 0) {
    console.log("O número" , numeral , "É múltiplo de 4!");
}else{
    console.log("O número" , numeral , "NÃO é múltiplo de 4! O resto da divisão é =" , (numeral % 4));

}


/* Descrição do exercício 2 sobre múltiplos de 4 aqui: 

Este exercício tem como objetivo verificar se um número digitado pelo usuário é múltiplo de 4.

O número é armazenado em uma variável e, em seguida, é utilizada a estrutura condicional if...else
para fazer a verificação.
A condição numeral % 4 === 0 utiliza o operador módulo (%), que calcula o resto da divisão.

Se o resto da divisão por 4 for igual a 0, significa que o número é múltiplo de 4. Caso contrário, 
o programa entra no bloco else e exibe que não é múltiplo, mostrando também qual foi o resto da divisão.

O resultado é apresentado no console utilizando console.log().

Interessante abordar que diferente do java, aqui no node utilizamos 3 sinais de igual (===), não somente
2 sinais de igual(==) como é feito no java.
*/









