/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

/* Para verificar a resolução, abrir o terminal e rodar a aplicação utilizando o node */


const min = 50000;
const max = 200000;

const faturamentoMensal = {
  "mes": "Setembro",
  "ano": 2024,
  "faturamento": [
    {
      "dia": 2,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 3,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 4,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 5,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 6,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 9,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 10,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 11,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 12,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 13,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 16,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 17,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 18,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 19,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 20,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 23,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 24,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 25,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 26,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 27,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
      "dia": 30,
      "faturamento": Math.floor(Math.random() * (max - min + 1)) + min
    }
  ]
}

let menor = {
  dia: faturamentoMensal.faturamento[0].dia,
  faturamento: faturamentoMensal.faturamento[0].faturamento
}
let maior = {
  dia: faturamentoMensal.faturamento[0].dia,
  faturamento: faturamentoMensal.faturamento[0].faturamento
}

let somaDoFaturamento = 0

faturamentoMensal.faturamento.forEach(diaDaSemana => {
  if(diaDaSemana.faturamento < menor.faturamento) {
    menor.dia = diaDaSemana.dia
    menor.faturamento = diaDaSemana.faturamento
  }
  if (diaDaSemana.faturamento > maior.faturamento) {
    maior.dia = diaDaSemana.dia
    maior.faturamento = diaDaSemana.faturamento
  }

  somaDoFaturamento += diaDaSemana.faturamento
})

const mediaDeFaturamentoMensal = Math.floor(somaDoFaturamento / faturamentoMensal.faturamento.length)
let diasMaioresQueAMedia = 0

faturamentoMensal.faturamento.forEach(diaDaSemana => {
  if(diaDaSemana.faturamento > mediaDeFaturamentoMensal) {
    diasMaioresQueAMedia++
  }
})

console.log(faturamentoMensal.faturamento)
console.log(`O menor faturamento do mês de Setembro de 2024, foi o dia ${menor.dia}, com o faturamento de R$ ${menor.faturamento}.`)
console.log(`O maior faturamento do mês de Setembro de 2024, foi o dia ${maior.dia}, com o faturamento de R$ ${maior.faturamento}.`)
console.log(`O número de dias do mês de Setembro de 2024 com faturamento acima da média, média: ${mediaDeFaturamentoMensal}, foram de ${diasMaioresQueAMedia} dias.`)
