## Rodar

Verifique que tem o Node instalado em sua máquina na versão 20

Na raiz do projeto, rode

- `npm install`
- `npm run start`.
  - O arquivo `src/index.ts` vai rodar, instanciando as classes e logando algo assim no terminal:

```
Cliente PRUNO ZOFIATO tem as seguintes contratações:

    Contratação
        Preço total: 10200
        Data contratação: 5/24/2024

        Pacotes:
            - Passagens Brasil-Hungria
                  Voo BS773SB por Gul
                  Preço: 4000

                  Voo TY341QA por Gul
                  Preço: 3000

            - Hospedagem em Budapeste
                  Hotel Hotel Grand Budapest
                  Endereço: Rua do rio Danúbio, 992, Budapest, Hungria
                  Preço: 1700

            - Carro Retrô
                  Locação de carro Fiat Topolino
                  Preço: 1500



    Contratação
        Preço total: 300
        Data contratação: 5/24/2024

        Pacotes:
            - Hospedagem Low Cost em Gyor
                  Hotel Hostel Coração de Mãe
                  Endereço: Travessa Apertada, 20b, Gyor, Hungria
                  Preço: 300
```

## Melhorias possíveis

- separar lógica de exibição (`logar()`) das classes
- suporte para moedas diferentes
- usar enums ao invés de strings puras
- etc...
