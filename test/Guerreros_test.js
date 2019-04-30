import { Arco } from '../src/Arco';
import { Espada } from '../src/Espada';
import { Madera } from '../src/Madera';
import { Hierro } from '../src/Hierro';
import { Fuego } from '../src/Fuego';

var expect = require('chai').expect;

describe('Decorator', function () {
  it('un arco sin decoradores deberia tener un daño de 5', function () {
    let arco = new Arco();
    expect(arco.obtenerDanio()).eq(5);
  });

  it('un arco con decorador de madera deberia tener un daño de 10', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    expect(arco.obtenerDanio()).eq(10);
  });

  it('un arco con decorador de hierro deberia tener un daño de 15', function () {
    let arco = new Arco();
    arco = new Hierro(arco);
    expect(arco.obtenerDanio()).eq(15);
  });

  it('un arco con decorador de fuego deberia tener un daño de 35', function () {
    let arco = new Arco();
    arco = new Fuego(arco);
    expect(arco.obtenerDanio()).eq(35);
  });

  it('un arco con decoradores de madera y hierro deberia tener un daño de 20', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Hierro(arco);
    expect(arco.obtenerDanio()).eq(20);
  });

  it('un arco con decoradores de madera y fuego deberia tener un daño de 40', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Fuego(arco);
    expect(arco.obtenerDanio()).eq(40);
  });

  it('un arco con decoradores de hierro y fuego deberia tener un daño de 45', function () {
    let arco = new Arco();
    arco = new Hierro(arco);
    arco = new Fuego(arco);
    expect(arco.obtenerDanio()).eq(45);
  });

  it('un arco con los tres decoradores deberia tener un daño de 50', function () {
    let arco = new Arco();
    arco = new Madera(arco);
    arco = new Hierro(arco);
    arco = new Fuego(arco);
    expect(arco.obtenerDanio()).eq(50);
  });

  it('una espada sin decoradores deberia tener un daño de 10', function () {
    let espada = new Espada();
    expect(espada.obtenerDanio()).eq(10);
  });

  it('una espada con decorador de madera deberia tener un daño de 15', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    expect(espada.obtenerDanio()).eq(15);
  });

  it('una espada con decorador de hierro deberia tener un daño de 20', function () {
    let espada = new Espada();
    espada = new Hierro(espada);
    expect(espada.obtenerDanio()).eq(20);
  });

  it('una espada con decorador de fuego deberia tener un daño de 40', function () {
    let espada = new Espada();
    espada = new Fuego(espada);
    expect(espada.obtenerDanio()).eq(40);
  });

  it('una espada con decoradores de madera y hierro deberia tener un daño de 25', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    espada = new Hierro(espada);
    expect(espada.obtenerDanio()).eq(25);
  });

  it('una espada con decoradores de madera y fuego deberia tener un daño de 45', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    espada = new Fuego(espada);
    expect(espada.obtenerDanio()).eq(45);
  });

  it('una espada con decoradores de hierro y fuego deberia tener un daño de 50', function () {
    let espada = new Espada();
    espada = new Hierro(espada);
    espada = new Fuego(espada);
    expect(espada.obtenerDanio()).eq(50);
  });

  it('una espada con los tres decoradores deberia tener un daño de 55', function () {
    let espada = new Espada();
    espada = new Madera(espada);
    espada = new Hierro(espada);
    espada = new Fuego(espada);
    expect(espada.obtenerDanio()).eq(55);
  });
});
