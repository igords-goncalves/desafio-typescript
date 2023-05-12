// Exercício 1 - Classe

// Atributos: nome, preco e desconto
// Criar contructor
// Obs 1.: Desconto é opcional (valor padrão = 0)
// Obs 2.: Criar produtos: passando dois e três params

class Product {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {}
    public precoComDesconto = (desconto: number, preco: number): number => {
        return desconto * 100 - preco;
    };
}

const produto1 = new Product("Camiseta", 28.99, 0.5);
console.log(
    `R$${produto1.precoComDesconto(produto1.desconto, produto1.preco)}`
);

class Moto {
    constructor(public nome: string, public velocidade: number = 0) {}
    public buzinar = (): void => {
        console.log("Toooooooooot!");
    };
    public acelerar = (delta: number): number => {
        return (this.velocidade = this.velocidade + delta);
    };
}

const moto: Moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança

class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {}
}

class Retangulo extends Objeto2D {
    constructor() {
        super(5, 7);
    }
    public area = (): number => {
        return this.base * this.altura;
    };
}
const r1: Retangulo = new Retangulo();
console.log(`Area = ${r1.area()}`);

// Exercício 3 - Getters & Setters

class Estagiario {
    private _primeiroNome: string = "";

    public get primeiroNome(): string {
        return this._primeiroNome;
    }

    public set primeiroNome(v: string) {
        if (v.length >= 3) {
            this._primeiroNome = v;
        } else {
            this._primeiroNome = "";
        }
    }
}

const est1: Estagiario = new Estagiario();

console.log(est1.primeiroNome);
est1.primeiroNome = "Le";
console.log(est1.primeiroNome);

est1.primeiroNome = "Leoni";
console.log(est1.primeiroNome);

est1.primeiroNome = "Leonardo";
console.log(est1.primeiroNome);
