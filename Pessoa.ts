export class Pessoa {
  constructor(
    protected _nome: string,
    protected _cpf: string,
    protected _saldo: number
  ) {}

  get nome() {
    return this._nome;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(newValue: number) {
    this._saldo = newValue;
  }
}
