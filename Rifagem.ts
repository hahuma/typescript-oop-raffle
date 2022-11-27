import { Pessoa } from "./Pessoa";
import { Rifa } from "./Rifa";
import { Sorteio } from "./Sorteio";
import { Util } from "./Util";

export class Rifagem extends Sorteio<Rifa> {
  constructor(rifas: Array<Rifa>, totalArrecadado: number, premio: string) {
    super(rifas, totalArrecadado, premio);
  }

  public get premio() {
    return `O prêmio do sorteio é: ${this._premio}`;
  }

  public get rifasRestantes() {
    const restantes = this._items.filter((rifa) => !rifa.vendido);
    const restantesFormatado = restantes
      .map((rifa) => rifa.numeroDaSorte)
      .join(", ");

    return `Essas são as rifas restantes: ${restantesFormatado}`;
  }

  public get rifasCompradas() {
    const rifas = this._items
      .filter((rifa) => rifa.vendido)
      .map((rifa) => ({
        Comprador: rifa.comprador,
        "Número da sorte": rifa.numeroDaSorte,
      }));

    return rifas;
  }

  // Função para vender onde a mesma irá deduzir do saldo da pessoa
  // e comprar uma rifa

  vender(numeroEscolhido: number, comprador: Pessoa) {
    let comprou = false;
    this._items = this._items.map((rifa) => {
      if (
        rifa.numeroDaSorte === numeroEscolhido &&
        !rifa.vendido &&
        comprador.saldo >= rifa.valor
      ) {
        comprou = true;
        comprador.saldo = comprador.saldo - rifa.valor;
        return { ...rifa, vendido: true, comprador: comprador.nome };
      } else {
        return rifa;
      }
    });

    if (!comprou) {
      return "Compra inválida";
    }

    if (comprou) {
      return `Rifa de número ${numeroEscolhido} foi comprada`;
    }
  }

  sortear() {
    const numeroSorteado = Util.sortear(0, 10);
    const rifaSorteada = this._items.filter(
      (rifa) => rifa.numeroDaSorte === numeroSorteado
    )[0];

    const textoComplementar = rifaSorteada.comprador
      ? `${rifaSorteada.comprador} ganhou, parabéns!`
      : "ninguém ganhou :(";

    return `O número sorteado foi '${numeroSorteado}' e ${textoComplementar}`;
  }
}
