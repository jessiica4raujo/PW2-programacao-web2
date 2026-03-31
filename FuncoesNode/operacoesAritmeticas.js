//Ex 01:
export function imparPar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é PAR!";
    } else {
        return "O número " + numero + " é ÍMPAR!";
    }
}

//Ex 02:
export function multiploQuatro(numeral) {
    if (numeral % 4 === 0) {
        return "O número " + numeral + " é múltiplo de 4!";
    } else {
        return "Não é múltiplo de 4. Resto: " + (numeral % 4);
    }
}

//Ex 03:
export function raizQuadrada(numero) {
    if (numero >= 0) {
        let raiz = Math.sqrt(numero);
        return "Raiz de " + numero + " = " + raiz;
    } else {
        return "Número inválido para raiz.";
    }
}

//Ex 04:
export function areaCirculo(area) {
    let raio = Math.sqrt(area / Math.PI);
    let diametro = raio * 2;

    return "Raio: " + raio + " | Diâmetro: " + diametro;
}