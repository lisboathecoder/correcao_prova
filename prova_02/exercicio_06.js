let shows = [2, 0, 3, 1, 4];
let showsTotal = 0;

for (let i = 0; i < shows.length; i++){
  showsTotal += shows[i];
}
if (showsTotal > 8){
  console.log("Você é super fã!");
} else{
  console.log("Aproveite mais os shows!");
}