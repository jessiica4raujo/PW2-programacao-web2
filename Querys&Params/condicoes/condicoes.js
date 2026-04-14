//Ex 01 If simples:
export function notaMaxima(nota) {
    if (nota === 10) {
        return "Parabéns! Nota máxima!";
    } else {
        return "Não tirou nota máxima.";
    }
}

//Ex 02 If else:
export function maiorMenorIdade(idade) {
    if (idade >= 18) {
        return "Você é de maior";
    } else {
        return "Você não é de maior";
    }
}

//Ex 03 If else:
export function valorSalario(salario) {
    if (salario === 1500) {
        return "Você recebe um salário mínimo";
    } else if (salario < 1500) {
        return "Você recebe menos que um salário mínimo";
    } else {
        return "Você recebe mais que o salário mínimo";
    }
}

//Ex 04 If Composto

export function ifComp(n1) {
    let nota = n1;
    if (nota >= 7) {
        return "Aluno APROVADO!";
    } else if (nota >= 5) {
        return "Aluno em RECUPERAÇÃO!";
    } else {
        return "Aluno REPROVADO!";
    }
}