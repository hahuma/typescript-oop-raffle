export class Rifa {
  constructor(
    public numeroDaSorte: number,
    public valor: number,
    public vendido: boolean = false,
    public comprador?: string
  ) {}
}
