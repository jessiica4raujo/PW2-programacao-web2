//Ex 01:
export function acessoNot(bloqueado) {
    if (!bloqueado) {
        return "Acesso liberado!";
    } else {
        return "Acesso bloqueado!";
    }
}

//Ex 02:
export function meiaEntrada(idade) {
    if (idade < 18 || idade >= 60) {
        return "Tem direito à meia-entrada!";
    } else {
        return "Não tem direito.";
    }
}

//Ex 03:
export function podeDirigir(idade, temCarteira) {
    if (idade >= 18 && temCarteira.toLowerCase() === "sim") {
        return "Pode dirigir!";
    } else {
        return "Não pode dirigir!";
    }
}