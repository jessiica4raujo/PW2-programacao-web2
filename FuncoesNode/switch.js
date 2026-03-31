export function escolherFruta(fruta) {
    switch (fruta) {
        case "banana":
            return "Fruta Incorreta";

        case "laranja":
            return "Fruta Incorreta";

        case "maca":
            return "Fruta Incorreta";

        case "uva":
            return `iupi,  ${fruta}  é a fruta certa`;

        default:
            return "fruta nao achada";
    }
}