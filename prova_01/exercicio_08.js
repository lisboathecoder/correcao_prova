let alturaCrianca = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if (alturaCrianca >= 1.5) {
  podeMontanhaRussa = true;
}

if (alturaCrianca >= 1.2) {
  podeRodaGigante = true;
}
if (alturaCrianca >= 1.1) {
  podeBateBate = true;
}

console.log("Pode brincar na Montanha-russa?" + (podeMontanhaRussa ? " Sim" : " Não"));
console.log("Pode brincar na Roda-Gigante?" + (podeRodaGigante ? " Sim" : " Não"));
console.log("Pode brincar no Carrinho bate-bate?" + (podeBateBate ? " Sim" : " Não"));

/*
Outra opção de resolução



*/

// 1 ponto
