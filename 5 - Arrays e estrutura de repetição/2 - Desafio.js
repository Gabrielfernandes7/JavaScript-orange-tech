// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let numeros = [1, 1, 2, 3, 5, 8, 13, 21, 44];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 === 0) {
        console.log(element);
    }
}