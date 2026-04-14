// Adição
export function adicao(n1, n2) {
    return n1 + n2;
}

// Subtração
export function sub(n1,n2) {
    return n1 - n2;
}

// Divisão
export function div(n1, n2) {
    if (n2 === 0) {
        return "Erro: divisão por 0";
    }
    return n1 / n2;
}

// Multiplicação
export function mult(n1,n2) {
    return n1 * n2;
}

// Potência
export function potencia(n1,n2) {
    return n1 ** n2;
}