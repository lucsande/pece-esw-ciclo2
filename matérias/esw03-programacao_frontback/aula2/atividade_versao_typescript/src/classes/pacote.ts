import { Logavel } from "../interfaces/logavel";

export class Pacote implements Logavel {
  private descricao: string;
  private itens: ItemPacote[] = [];
  valor: number = 0;

  constructor(descricao: string) {
    this.descricao = descricao;
  }

  adicionarItem(item: ItemPacote) {
    this.itens.push(item);
    this.valor += item.preco;
  }

  logar() {
    console.log(`            - ${this.descricao}`);
    for (const item of this.itens) {
      item.logar();
    }
  }
}

export abstract class ItemPacote implements Logavel {
  preco: number;

  constructor(preco: number) {
    this.preco = preco;
  }

  abstract logar(): void;
}

export class Hospedagem extends ItemPacote {
  private nomeHotel: string;
  private endereco: string;

  constructor(preco: number, nomeHotel: string, endereco: string) {
    super(preco);
    this.nomeHotel = nomeHotel;
    this.endereco = endereco;
  }

  logar() {
    console.log(`                  Hotel ${this.nomeHotel}`);
    console.log(`                  Endereço: ${this.endereco}`);
    console.log(`                  Preço: ${this.preco}`);
    console.log(``);
  }
}

export class TransladoAereo extends ItemPacote {
  private companhiaAerea: string;
  private numeroVoo: string;

  constructor(preco: number, companhiaAerea: string, numeroVoo: string) {
    super(preco);
    this.companhiaAerea = companhiaAerea;
    this.numeroVoo = numeroVoo;
  }

  logar() {
    console.log(`                  Voo ${this.numeroVoo} por ${this.companhiaAerea}`);
    console.log(`                  Preço: ${this.preco}`);
    console.log(``);
  }
}

export class LocacaoVeiculo extends ItemPacote {
  private marca: string;
  private modelo: string;

  constructor(preco: number, marca: string, modelo: string) {
    super(preco);
    this.marca = marca;
    this.modelo = modelo;
  }

  logar() {
    console.log(`                  Locação de carro ${this.marca} ${this.modelo}`);
    console.log(`                  Preço: ${this.preco}`);
    console.log(``);
  }
}
