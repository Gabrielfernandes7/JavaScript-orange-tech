let precoEtanol = 5.5;
let precoGasolina = 7.0;

let combustivel = 'Gasolina'; // 'Gasolina' ou 'Etanol'

let rendimento = 18.0; // 18Km/L
let distanciaEmKm = 100; // 100Km

const litrosConsumidos = distanciaEmKm / rendimento;

if (combustivel === 'Gasolina') {
    const valorGastoViagem = litrosConsumidos * precoGasolina;
    console.log(valorGastoViagem.toFixed(2));
} else {
    const valorGastoViagem = litrosConsumidos * precoEtanol;
    console.log(valorGastoViagem.toFixed(2));
}