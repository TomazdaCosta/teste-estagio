/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

/* Para verificar a resolução, abrir o terminal e rodar a aplicação utilizando o node */

const faturamentoBrasil = {
  "faturamentoMes": [
    {
      "estado": "SP",
      "faturamento": 67836.43,
      "porcentagem": 0
    },
    {
      "estado": "RJ",
      "faturamento": 36678.66,
      "porcentagem": 0
    },
    {
      "estado": "MG",
      "faturamento": 29229.88,
      "porcentagem": 0
    },
    {
      "estado": "ES",
      "faturamento": 27165.48,
      "porcentagem": 0
    },
    {
      "estado": "Outros",
      "faturamento": 19849.53,
      "porcentagem": 0
    },
  ]
}

let faturamentoTotal = 0

faturamentoBrasil.faturamentoMes.forEach(estado => {
  faturamentoTotal += estado.faturamento
})

faturamentoBrasil.faturamentoMes.forEach(estado => {
  estado.porcentagem = ((estado.faturamento / faturamentoTotal) * 100).toFixed(2)
})

console.log(faturamentoTotal)
console.log(faturamentoBrasil)