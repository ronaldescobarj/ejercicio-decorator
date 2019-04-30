import { ArmaDecorador } from "./ArmaDecorador";

export class Fuego extends ArmaDecorador {
    constructor(arma) {
        super(arma);
        this.danio = 30;
    }
}