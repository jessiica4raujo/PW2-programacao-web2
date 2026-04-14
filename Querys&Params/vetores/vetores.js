//Ex 01:
export function posicaoComida() {
    let comida = ["Lasanha", "Coxinha", "Pizza"];

    return "Tamanho: " + comida.length + " | Terceira: " + comida[2];
}

//Ex 02:
export function mostrarNumeros(n1, n2, n3) {
    let numeros = [n1, n2, n3];

    let resultado = "Números: ";

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i] + " ";
    }

    return resultado;
}

//Ex 03:
export function removerNome(n1, n2, n3) {
    let nomes = [n1, n2, n3];

    let antes = "Antes: " + nomes;

    nomes.splice(1, 1);

    let depois = " | Depois: " + nomes;

    return antes + depois;
}

//Ex 04:
export function somarVetores(ax, ay, bx, by) {
    let vetorA = [ax, ay];
    let vetorB = [bx, by];

    let vetorC = [
        vetorA[0] + vetorB[0],
        vetorA[1] + vetorB[1]
    ];

    return "Resultado: [" + vetorC + "]";
}

//Ex 05:
export function somaNotas(n1, n2, n3) {
    let notas = [n1, n2, n3];

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return "Notas: " + notas + " | Soma: " + soma;
}