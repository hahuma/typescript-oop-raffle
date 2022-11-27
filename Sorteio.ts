// Classe abstrata de sorteio que pode ser usada para qualquer tipo de sorteio
// seja rifagem, bingo, etc...
// o generics T vai evidenciar qual é o tipo de sorteio e quais serão os items

import { Pessoa } from "./Pessoa";
export abstract class Sorteio<T> {
  constructor(
    protected _items: Array<T>,
    protected _totalArrecadado: number,
    protected _premio: string
  ) {}

  public abstract vender(numeroEscolhido: number, comprador: Pessoa): void;

  public abstract sortear(): string;
}
