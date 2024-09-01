/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

/* Para verificar a resolução, abrir o terminal e rodar a aplicação utilizando o node */

const palavra = "paralelepipedo"
const palavraInvertida = []

for (let index = 0; index < palavra.length; index++) {
  palavraInvertida.push(palavra[(palavra.length - 1) - index])
}

console.log(`A palavra ${palavra}, ivertida fica: ${palavraInvertida.join("")}`)
