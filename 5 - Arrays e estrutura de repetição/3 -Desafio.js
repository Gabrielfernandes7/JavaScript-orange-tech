// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let nomes = ['Vitoria', 'Vó', 'Marina'];

for (let i = 0; i < nomes.length; i++) {
    const elemento = nomes[i];

    let letrasSeparadas = elemento.split('');

    if (letrasSeparadas[0] === 'v' || letrasSeparadas[0] === 'V') {
        let letrasJuntas = letrasSeparadas.concat().join('');
        console.log(letrasJuntas);
    }

}