// Igual
function igual(n1, n2) {
    if (n1 === n2) {
        return `${n1} e ${n2} são iguais`;
    } else {
        return `${n1} e ${n2} não são iguais`;
    }
}

// Maior que
function maiorQue(n1, n2) {
    if (n1 > n2) {
        return `${n1} é maior que ${n2}`;
    } else {
        return `${n1} não é maior que ${n2}`;
    }
}

// Menor que
function menorQue(n1, n2) {
    if (n1 < n2) {
        return `${n1} é menor que ${n2}`;
    } else {
        return `${n1} não é menor que ${n2}`;
    }
}

// Maior ou Igual
function maiorIgual(n1, n2) {
    if (n1 >= n2) {
        return `${n1} é maior ou igual a ${n2}`;
    } else {
        return `${n1} não é maior ou igual a ${n2}`;
    }
}

// Menor ou Igual
function menorIgual(n1, n2) {
    if (n1 <= n2) {
        return `${n1} é menor ou igual a ${n2}`;
    } else {
        return `${n1} não é menor ou igual a ${n2}`;
    }
}

// Exportação para CommonJS (sem o type: module no package.json)
export {igual, maiorQue, menorQue, maiorIgual, menorIgual};