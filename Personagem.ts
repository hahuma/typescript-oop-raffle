export abstract class Usuario {
  constructor(
    protected _id: number,
    protected _nome: string,
    protected _cpf: string,
    protected habilidadeMental: number,
    protected poderDeAtaque: number,
    protected esquiva: number,
    protected resistencia: number,
    protected vidaAtual: number,
    protected vidaMaxima: number
  ) {}

  public abstract atacar(personagem: Usuario): void;

  public abstract contraAtacar(personagem: Usuario): void;

  public abstract aprimorarHabilidadePrincipal(): void;

  public abstract regenerarVida(): void;
}
