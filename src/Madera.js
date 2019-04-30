import { ArmaDecorador } from "./ArmaDecorador";

export class Madera extends ArmaDecorador {
    constructor(arma) {
        super(arma);
        this.danio = 5;
    }
}