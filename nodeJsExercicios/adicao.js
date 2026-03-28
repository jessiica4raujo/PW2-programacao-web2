const prompt = require ("prompt-sync")();

let num1 = Number(prompt("Digite o 1° número para realizar a soma: "));
let num2 = Number(prompt("Digite o 2° número para realizar a soma: "));

let soma = num1 + num2;

console.log("Resultado da soma é:" , soma);

/*  Descricao do exercicio 1 aqui: 

Esse exercício tem como objetivo somar dois números informados pelo usuário.
O programa solicita os valores para o usuário, converte para o tipo Number()
e realiza a operação de adição utilizando o operador "+".

O resultado da soma é armazenado na variável "soma" e exibido no console
de forma clara para o usuário.

Na adaptação de Java para Node.js, utilizei a biblioteca "prompt-sync"
para entrada de dados, assim como foi necessário para todos os outros 
exercícios que precisaram de entrada de dados.
*/




/*
const prompt = require ("prompt-sync")();

let soma = 0;
let valor = Number(prompt("Digite o valor de suas despesas aqui (digite 0 para sair: "));

while (valor != 0) {
    soma += valor;
    valor = Number(prompt("Digite o valor de suas despesas aqui (digite 0 para sair): "));
    
}

 console.log("Total das despesas é de: R$" , soma);


 /*  Descricao do exercicio 2 aqui:  
 
Este exercício calcula o total das despesas informadas pelo usuário.
O programa pede valores continuamente e vai somando na variável "soma".
Para encerrar, o usuário deve digitar 0.

Foi utilizado um laço while, que repete enquanto o valor for diferente de 0.
Cada número digitado é convertido para Number() e acumulado com o operador "+=".
Ao final, o total das despesas é exibido no console.

Na transcrição de Java para Node.js, usei a biblioteca "prompt-sync" no lugar do Scanner
e não precisei declarar tipos como int ou double.
*/

