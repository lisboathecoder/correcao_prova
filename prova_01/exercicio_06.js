let caixa = [3, 7, 5, 2, 9];
let totalAnimais = 0;

for (let i = 0; i <= caixa.length; i++) {
  totalAnimais = totalAnimais + caixa[i];
}
console.log("Total animais:", totalAnimais);

if (totalAnimais >= 20) {
  console.log("Estoque Cheio");
} else {
  console.log("Ainda cabe mais!");
}
// 1 ponto
