class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    // O que acontece quando um carro é instanciado
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoDaViagem(distancia, precoCombustivel) {
        // precoCombustivel (L / R$)
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }

}

const taycan = new Carro(); // instânciando o objeto
taycan.cor = 'Laranja';
taycan.marca = 'Porsch';
taycan.gastoMedioPorKm = 1 / 12; // 1L para 12Km
// Viagem de 200 Km com gasolina no preço de 7.50
console.log(taycan.gastoDaViagem(200.0, 7.50))

// Utilizando o método construtor
const panamera = new Carro('Verde', 'Porsch', 8.0);

console.log(taycan);
console.log(panamera);
