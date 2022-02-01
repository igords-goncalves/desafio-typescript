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

class Estagiario {
    private _primeiroNome: string =  ''

    public get primeiroNome() : string {
        return this._primeiroNome
    }

    public set primeiroNome(v : string) {
        if(v.length >= 3) {
            this._primeiroNome = v
        } else {
            this._primeiroNome = ''
        }
    }
}

const est1: Estagiario = new Estagiario

console.log(est1.primeiroNome)
est1.primeiroNome = 'Le'
console.log(est1.primeiroNome)

est1.primeiroNome = 'Leoni'
console.log(est1.primeiroNome)

est1.primeiroNome = 'Leonardo'
console.log(est1.primeiroNome)