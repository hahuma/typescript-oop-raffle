import prompt from "prompt-sync";
import { Pessoa } from "./Pessoa";
import { Rifa } from "./Rifa";
import { Rifagem } from "./Rifagem";

const rifas: Array<Rifa> = [];

for (let i = 0; i <= 10; i++) {
  rifas.push(new Rifa(i, 20));
}

const sorteio = new Rifagem(rifas, 0, "Carro");
const comprador = new Pessoa("João", "1212312312", 100);

const teclado = prompt();
let running = true;

while (running) {
  console.log("=========   Rifeiro   ========");
  console.log("| 1 - Listar rifas restantes |");
  console.log("| 2 - Comprar rifa           |");
  console.log("| 3 - Ver rifas compradas    |");
  console.log("| 4 - Sortear rifa           |");
  console.log("| 5 - Sair                   |");
  console.log("============================== \n");

  const action = Number(teclado("Escolha uma ação: "));

  switch (action) {
    case 1:
      console.log(sorteio.rifasRestantes);
      break;
    case 2:
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
        console.log("Nenhuma rifa foi comprada \n");
      }
      break;
    case 4:
      console.log(sorteio.sortear());

      running = false;
      break;
    case 5:
    default:
      console.log("Saindo...");
      running = false;
      break;
  }
}
