export function escolherFruta(fruta) {
    fruta = fruta.toLowerCase();

    switch (fruta) {
        case "Uva":
            return `iupi, ${fruta} é a fruta certa`;

        case "Banana":
        case "Laranja":
        case "Maça":
            return "Fruta incorreta";

        default:
            return "Fruta não encontrada";
    }
}