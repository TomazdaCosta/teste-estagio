/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

/* Para verificar a resolução, abrir o terminal e rodar a aplicação utilizando o node */""

let k = 0
let soma = 0

for (let indice = 13; indice > k; indice--) {
  k += 1
  soma += k
}

console.log(`O valor final da variável soma é: ${soma}`)