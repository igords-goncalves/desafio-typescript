//%* Exercício 1 - Classe

class Moto {
    constructor(
        public nome: string,
        public velocidade: number = 0) {
    }
    public buzinar = (): void => {
        console.log('Toooooooooot!')
    }
    public acelerar = (delta: number): number => {
        return this.velocidade = this.velocidade + delta
    }
}
 
const moto: Moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
//%* Exercício 2 - Herança

class Objeto2D {
    constructor (
        public base: number =  0,
        public altura: number =  0) {
    }
}
 
class Retangulo extends Objeto2D {
    constructor() {
        super(5, 7)
    }
    public area = (): number => {
        return this.base * this.altura
    }
}
const r1: Retangulo = new Retangulo
console.log(`Area = ${r1.area()}`)
 
//%* Exercício 3 - Getters & Setters

var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)