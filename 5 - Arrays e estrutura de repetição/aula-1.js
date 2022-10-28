// Criamos uma lista
const alunos = ['Marina', 'Maria'];
console.log(alunos);

// Chamamos o segundo item da lista
console.log(alunos[1]); // ['Maria']

// Método push() adiciona um item na lista
alunos.push('Mariana');
console.log(alunos);

// Outra forma de adicionar items na lista
alunos[3] = 'Marília';
console.log(alunos);

/*
    Criar um array vazio

    const arrayVazio = [];

*/

// Método pop() retira o último item da posição
console.log(alunos.pop()); // Imprime o item removido
console.log(alunos);

// Método shift() retira o primeiro item da posição
console.log(alunos.shift());
console.log(alunos);