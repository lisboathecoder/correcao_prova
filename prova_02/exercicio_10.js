let casteloVida = 500;
let ataques = [30, 50, 20, 70, 60, 40];

for (let i = 0; i < ataques.length; i++) {
  casteloVida -= ataques[i];
  if (casteloVida <= 0) {
    casteloVida = 0;
    break;
  }
}
if (casteloVida > 0) {
  console.log(`O castelo foi resistiu com ${casteloVida}!`);
} else {
  console.log(`O castelo foi destruído!`);
}
