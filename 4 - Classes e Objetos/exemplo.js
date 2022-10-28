class Carro {
    marca;
    cor;
    rendimento;

    // O que acontece quando um carro é instanciado
    constructor(marca, cor, rendimento) {
        this.marca = marca;
        this.cor = cor;
        this.rendimento = rendimento;
    }

    gastoPorKm(_distanciaKm, _rendimento) {

    }

}

const modelX = new Carro('Tesla', 'Prateado', 'Elétrico');

console.log(modelX);

/*
    OUTPUT:
    Carro {marca: 'Tesla', cor: 'Prateado', rendimento: 'Elétrico'}
*/
