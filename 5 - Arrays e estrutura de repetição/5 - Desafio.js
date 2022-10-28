// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).

let listaMedias = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < listaMedias.length; i++) {
    if (listaMedias[i] < 5) {
        console.log(listaMedias);
    }
}