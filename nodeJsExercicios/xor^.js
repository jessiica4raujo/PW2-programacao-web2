const prompt = require ("prompt-sync")();

let a = Number(prompt("Digite o primeiro número aqui: "));
let b = Number(prompt("Digite o segundo número aqui: "));

if((a ^ b) === 0){
    console.log("Os números são IGUAIS!")
}else{
    console.log("Os números são DIFERENTES!")
}

/* Descrição do exercício 1 sobre identificação de números aqui: 


*/

const prompt = require ("prompt-sync")();

codigoSistema = 1234;

let codigoDigitado = Number(prompt("Digite seu código aqui: "));

if((codigoSistema ^ codigoDigitado) === 0){
    console.log("Acesso LIBERADO!");
}else{
    console.log("Código INCORRETO, tente novamente!")
}

/*  Fazer a descricao do exercicio 2 aqui:  */



/*   OBSERVAÇÃO: ACREDITO QUE ISSO ESTÁ ERRADO, PQ XOR É BIT A BIT NÃO OPERADOR ARITMÉTICO NÃO DE IGUALDADE OU DIFERENÇA*/


