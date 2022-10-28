let precoCombustivel = 7.0; // R$ 7.00/L

let kmPorLitro = 18.0; // Rendimento = 18Km/L

let distanciaEmKm = 200.0; // 200km

const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorGastoEmCombustivel = litrosConsumidos * precoCombustivel;

console.log(valorGastoEmCombustivel.toFixed(2));