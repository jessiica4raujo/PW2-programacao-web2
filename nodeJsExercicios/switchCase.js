// Exercicio 1 - Fruta
let fruta = "uva";
switch(fruta){
    case "banana":
        console.log("Fruta Incorreta");
        break;

     case "laranja":
        console.log("Fruta Incorreta");
        break;

     case "maca":
        console.log("Fruta Incorreta");
        break;

    case "uva":
        console.log("iupi, fruta certa");
        break;
    
    default:
        console.log("fruta nao achada");
        break;
}


//Exercicio 2 - Dias da semana
let dia= "dia3";
switch(dia){

    case "dia1":
        console.log("Domingo");
        break;

     case "dia2":
        console.log("Segunda-Feira");
        break;

     case "dia3":
        console.log("Terça-Feira");
        break;

     case "dia4":
        console.log("Quarta-Feira");
        break;

    case "dia5":
        console.log("Quinta-Feira");
        break;

    case "dia6":
        console.log("Sexta-Feira");
        break;

    case "dia7":
        console.log("Sábado");
        break;
}


/*Nesse codigo foi usado a estrutura switchCase, que serve para comparar o valor de uma variável
com várias opções. 
No primeiro caso,foi criado a variável "fruta" que recebeu a "uva" e o switch
verifica cada caso/case até encontrar "uva" logo, exibindo a mensagem "iupi, fruta certa". 

No segundo caso, a variável "dia" recebeu "dia3" e o switch compara com os
 casos disponíveis até encontrar "dia3", mostrando "Terça-Feira".

Tambem temos o "break" que serve para interromper o "switch" quando o caso correto é encontrado, 
evitando que os próximos casos sejam executados.
*/


