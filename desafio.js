"use strict";
//%* Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.buzinar = () => {
            console.log('Toooooooooot!');
        };
        this.acelerar = (delta) => {
            return this.velocidade = this.velocidade + delta;
        };
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
//%* Exercício 2 - Herança
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
const r1 = new Retangulo;
console.log(`Area = ${r1.area()}`);
//%* Exercício 3 - Getters & Setters
var estagiario = {
    _primeiroNome: ''
};
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome;
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    },
    enumerable: true,
    configurable: true
});
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map