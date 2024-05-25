import { Logavel } from "../interfaces/logavel";
import { Contratacao } from "./contratacao";

export class Cliente implements Logavel {
  private nome: string;
  private dataNascimento: Date;
  private contratacoes: Contratacao[] = [];

  constructor(nome: string, dataNascimento: Date) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

  contratar(dataContratacao: Date): Contratacao {
    const contratacao = new Contratacao(this, dataContratacao);
    this.contratacoes.push(contratacao);

    return contratacao;
  }

  logar() {
    console.log(`Cliente ${this.nome.toUpperCase()} tem as seguintes contratações:`);
    console.log(``);

    for (const contratacao of this.contratacoes) {
      contratacao.logar();
    }
  }
}
