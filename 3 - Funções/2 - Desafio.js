/*
    Forma = forma de pagamento à vista
    1 - Pix
    2 - Débito
*/

function aVista(forma, preco) {
    console.log('1 - Pix ou Dinheiro | 2 - Débito');
    if (forma == '1') {
        console.log('Forma de pagamento é no dinheiro ou no PIX')
        const valorTotal = preco - 0.15 * preco;
        console.log(valorTotal);
    } else if (forma == '2') {
        console.log('Forma de pagamento é no débito')
        const valorTotal = preco - 0.10 * preco;
        console.log(valorTotal);
    } else {
        console.log('Os valores para escolha da forma de pagamento só podem ser 1 ou 2');
    }
}

function parcelado(parcelas, preco) {
    if (parcelas === 2) {
        console.log('O valor foi parcelado 2 vezes sem juros');
        const valorTotal = preco;
        return valorTotal;
    } else {
        console.log('O valor foi parcelado mais de 2 vezes com uma taxa de 15%');
        const valorTotal = preco + 0.15 * preco;
        return valorTotal;
    }
}

let precoProduto = 40.0; // R$ 40.00

console.log('Qual valor da peça de roupa ?');

console.log('FORMA DE PAGAMENTO');
console.log('\n');
console.log('1 - À vista |  2 - Parcelado');
let formaDePagamento = '1'; // '1' À vista

if (formaDePagamento === '1') {
    aVista('2', precoProduto);
} else {
    console.log('Quantas parcelas ?');
    console.log(parcelado('2', precoProduto));
}
