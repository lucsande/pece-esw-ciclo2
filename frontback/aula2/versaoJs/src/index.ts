import { Cliente } from "./classes/cliente";
import { Hospedagem, LocacaoVeiculo, TransladoAereo } from "./classes/pacote";

console.log("");
console.log("iniciando...");
console.log("");
console.log("");

// SETANDO ITENS DE PACOTES
const hotelBudapeste = new Hospedagem(1700, "Hotel Grand Budapest", "Rua do rio Danúbio, 992, Budapest, Hungria");
const hostelGyor = new Hospedagem(300, "Hostel Coração de Mãe", "Travessa Apertada, 20b, Gyor, Hungria");
const vooIda = new TransladoAereo(4000, "Gul", "BS773SB");
const vooVolta = new TransladoAereo(3000, "Gul", "TY341QA");
const aluguelCarro = new LocacaoVeiculo(1500, "Fiat", "Topolino");

// CLIENTE
const cliente = new Cliente("Pruno Zofiato", new Date());

// CONTRATAÇÃO 1 (Budapeste)
const contratacao1 = cliente.contratar(new Date());
contratacao1.adicionarPacote("Passagens Brasil-Hungria", [vooIda, vooVolta]);
contratacao1.adicionarPacote("Hospedagem em Budapeste", [hotelBudapeste]);
contratacao1.adicionarPacote("Carro Retrô", [aluguelCarro]);

// CONTRATAÇÃO 2 (Gyor)
const contratacao2 = cliente.contratar(new Date());
contratacao2.adicionarPacote("Hospedagem Low Cost em Gyor", [hostelGyor]);

// LOGAR TUDO QUE FOI FEITO
cliente.logar();
