//Ex 01 While:
    export function contarAteDez(limite) {
    let i = 1;
    let resultado = "Números: ";

    while (i <= limite) {
        resultado += i + " ";
        i++;
    }

    return resultado;
}


//Ex 02 While:
export function somarNumeros(numeros) {
    let soma = 0;
    let i = 0;

    while (i < numeros.length) {
        soma += numeros[i];
        i++;
    }

    return soma;
}

//Ex 03 For:
export function milImpares(valor) {
    let resultado = "Ímpares de 0 a 1000: ";

    for (let i = 0; i <= valor; i++) {
        if (i % 2 === 1) {
            resultado += i + " ";
        }
    }

    return resultado;
}

//Ex 04 For:
export function somaPares(inicio, final) {
    let soma = 0;

    for (let i = inicio; i <= final; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    return soma;
}

//Ex 05 Do-While:
export function fatorial(numero) {
    let i = 1;
    let fatorial = 1;

    do {
        fatorial *= i;
        i++;
    } while (i <= numero);

    return fatorial;
}

//Ex 06 Do-While:
export function numerosQntd(numeros) {
    let soma = 0;
    let quantidade = 0;

    numeros.forEach(num => {
        if (num >= 0) {
            soma += num;
            quantidade++;
        }
    });

    return {
        soma: soma,
        quantidade: quantidade
    };
}

//Ex 07 Map:
export function numerosMultiplicados(n1, n2, n3) {
    let vetor = [n1, n2, n3];

    let multiplicados = vetor.map(num => num * 5);

    return "Originais: " + vetor + " | x5: " + multiplicados;
}