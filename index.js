var par = [];
var impar = [] ;
function generarNumeroRandom() {
  return Math.floor(Math.random() * 100) ;
}
function separarParImpar () {
  for (let i =  0; i < 50 ; i++ ) {
    let numeroRandom = generarNumeroRandom ();
    if (numeroRandom % 2 ===0){
      par.push (numeroRandom);
    } else {
      impar.push(numeroRandom);
    }
  }
}
separarParImpar();
console.log (par);
console.log (impar);