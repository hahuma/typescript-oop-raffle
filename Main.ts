import prompt from "prompt-sync";
import { Pessoa } from "./Pessoa";
import { Rifa } from "./Rifa";
import { Rifagem } from "./Rifagem";

const rifas: Array<Rifa> = [];

for (let i = 1; i <= 10; i++) {
  rifas.push(new Rifa(i, 20));
}

const sorteio = new Rifagem(rifas, 0, "Carro");
const comprador = new Pessoa("João", "121.231.231-02", 100);

const teclado = prompt();
let running = true;

while (running) {
  console.log("=========   Rifeiro   ========");
  console.log("| 1 - Listar rifas restantes |");
  console.log("| 2 - Comprar rifa           |");
  console.log("| 3 - Ver rifas compradas    |");
  console.log("| 4 - Sortear rifa           |");
  console.log("| 5 - Informações pessoais   |");
  console.log("| 6 - Sair                   |");
  console.log("==============================");

  const action = Number(teclado("Escolha uma ação: "));

  switch (action) {
    case 1:
      console.log(sorteio.rifasRestantes);
      break;
    case 2:
      console.log(`Seu saldo R$ ${comprador.saldo}`);
      console.log(sorteio.premio);
      console.log(sorteio.valor);
      console.log(sorteio.rifasRestantes);
      const rifa = +teclado(
        "Escolha sua rifa entre os números acima(se algum valor inválido for inserido ou você não tiver dinheiro suficiente a compra será desconsiderada): "
      );

      console.log(sorteio.vender(rifa, comprador));
      break;
    case 3:
      if (sorteio.rifasCompradas.length > 0) {
        console.table(sorteio.rifasCompradas);
      }
      if (sorteio.rifasCompradas.length === 0) {
        console.log("Nenhuma rifa foi comprada");
      }
      break;
    case 4:
      console.log(sorteio.sortear());

      running = false;
      break;
    case 5:
      console.log("=========   Comprador   ========");
      console.log(` Nome:  ${comprador.nome}`);
      console.log(` CPF:   ${comprador.cpf}`);
      console.log(` Saldo: R$ ${comprador.saldo}`);
      console.log("================================");

      teclado("Aperte enter para continuar ");
      break;
    case 6:
    default:
      console.log("Saindo...");
      running = false;
      break;
  }
}
