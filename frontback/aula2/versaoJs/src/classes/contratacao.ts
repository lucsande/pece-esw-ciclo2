import { Logavel } from "../interfaces/logavel";
import { Cliente } from "./cliente";
import { ItemPacote, Pacote } from "./pacote";

export class Contratacao implements Logavel {
  private cliente: Cliente;
  private valor: number = 0;
  private dataContratacao: Date;
  private pacotes: Pacote[] = [];

  constructor(cliente: Cliente, dataContratacao: Date) {
    this.cliente = cliente;
    this.dataContratacao = dataContratacao;
  }

  adicionarPacote(descricao: string, itens: ItemPacote[]) {
    const pacote = new Pacote(descricao);

    for (const item of itens) {
      pacote.adicionarItem(item);
    }

    this.valor += pacote.valor;

    this.pacotes.push(pacote);
  }

  getData() {
    return this.dataContratacao.toLocaleDateString();
  }

  logar() {
    console.log(`    Contratação`);
    console.log(`        Preço total: ${this.valor}`);
    console.log(`        Data contratação: ${this.dataContratacao.toLocaleDateString()}`);
    console.log(``);
    console.log(`        Pacotes:`);

    for (const pacote of this.pacotes) {
      pacote.logar();
    }

    console.log(``);
    console.log(``);
  }
}
