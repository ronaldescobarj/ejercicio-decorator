import { ArmaDecorador } from "./ArmaDecorador";

export class Hierro extends ArmaDecorador {
    constructor(arma) {
        super(arma);
        this.danio = 10;
    }
}