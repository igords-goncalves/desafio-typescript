"use strict";
// Exercício 1 - Classe
// Atributos: nome, preco e desconto
// Criar contructor
// Obs 1.: Desconto é opcional (valor padrão = 0)
// Obs 2.: Criar produtos: passando dois e três params
class Product {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoComDesconto = (desconto, preco) => {
            return desconto * 100 - preco;
        };
    }
}
const produto1 = new Product("Camiseta", 28.99, 0.5);
console.log(`R$${produto1.precoComDesconto(produto1.desconto, produto1.preco)}`);
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.buzinar = () => {
            console.log("Toooooooooot!");
        };
        this.acelerar = (delta) => {
            return (this.velocidade = this.velocidade + delta);
        };
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    constructor() {
        super(5, 7);
        this.area = () => {
            return this.base * this.altura;
        };
    }
}
const r1 = new Retangulo();
console.log(`Area = ${r1.area()}`);
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(v) {
        if (v.length >= 3) {
            this._primeiroNome = v;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const est1 = new Estagiario();
console.log(est1.primeiroNome);
est1.primeiroNome = "Le";
console.log(est1.primeiroNome);
est1.primeiroNome = "Leoni";
console.log(est1.primeiroNome);
est1.primeiroNome = "Leonardo";
console.log(est1.primeiroNome);
//# sourceMappingURL=desafio.js.map