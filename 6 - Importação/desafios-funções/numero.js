function maiorNumero(arr) {
    for (let i = 0; i < arr.length; i++)
        var maior = Math.max(...arr);

    console.log(`Maior número: ${maior}`);
}

function menorNumero(arr) {
    for (let i = 0; i < arr.length; i++)
        var menor = Math.min(...arr);

    console.log(`Menor número: ${menor}`)
}
module.exports = { maiorNumero, menorNumero };