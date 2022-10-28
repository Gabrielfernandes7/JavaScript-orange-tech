// Declarar função
function media(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3);
}

const mediaAluno = media(9.5, 8.5, 10.0).toFixed(2)

if (mediaAluno >= 7.0) {
    console.log('Passou de semestre');
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovação');
}