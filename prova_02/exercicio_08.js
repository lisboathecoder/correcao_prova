let nivel = 38;

if (nivel >= 50){
  console.log("Você pode atacar os chefões, entrar em eventos especiais e participar de combates normais");
} else if (nivel >= 40) {
  console.log("Você pode entrar em eventos especiais e participar de combates normais");
} else if (nivel >= 20) {
  console.log("Você pode participar de combates normais");
} else {
  console.log("Você não tem nível suficiente");
}
