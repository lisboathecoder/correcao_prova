let curtidas = [1, 4, 3, 2, 70, 100];
let maior = curtidas[0];
let i = 0;

while (i < curtidas.length){
    if (curtidas[i] > maior) {
        maior = curtidas [i];
    }
    i++
}
console.log(maior)