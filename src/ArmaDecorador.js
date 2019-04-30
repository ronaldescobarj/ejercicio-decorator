import { Arma } from './Arma';

export class ArmaDecorador extends Arma {
    constructor(arma) {
        super();
        this.arma = arma;
    }

    obtenerDanio() {
        return this.danio + this.arma.obtenerDanio();
    }
}