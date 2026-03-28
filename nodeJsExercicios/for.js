const prompt = require ("prompt-sync")();

let inicio = Number(prompt("Digite o número inicial: "));

let final = Number(prompt("Digite o número final: "));

let soma = 0;

for (let i = inicio; i<= final; i++){
    if(i % 2 === 0){
        soma += i;
    }
}

console.log("A soma dos números pares é de: " , soma);


/*  Descrição do exercício 1 sobre soma de números pares aqui: 

Este exercício tem como objetivo calcular a soma dos números pares
dentro de um intervalo informado pelo usuário.

O programa solicita um número inicial e um número final.
Em seguida, utiliza um laço for para percorrer todos os valores
entre esses dois números.

Dentro do laço, é feita uma verificação com a estrutura if
para saber se o número é par (usando i % 2 === 0).
Se for par, ele é somado na variável "soma".

Ao final, o programa exibe no console o total da soma
dos números pares encontrados no intervalo.
*/


for (let i = 0; i <=1000; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

/* Descrição do exercicio 2 sobre números ímpares 0-1000 aqui: 

Este exercício tem como objetivo exibir todos os números ímpares
entre 0 e 1000.

Foi utilizado um laço de repetição for que percorre os números de 0 até 1000.
Dentro do laço, é feita uma verificação com a estrutura if
para identificar se o número é ímpar, utilizando a condição
i % 2 === 1.

Quando a condição é verdadeira, o número é exibido no console.
Assim, o programa mostra apenas os valores ímpares dentro do intervalo definido.

Interessante ressaltar que nesse caso não coloquei o prompt-sync (é tipo o Scanner 
de entrada de dados no java) aqui pois não há entrada de dados nesse exercício.
*/
