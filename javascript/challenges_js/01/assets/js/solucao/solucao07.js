function myFunction(a,b) {
  // return b.match(new RegExp(a , "gi")).length;
  return b.toLowerCase().split(a.toLowerCase()).length - 1; 
}

console.log(
  myFunction("a", "Quantas vezes o valor de 'a' ocorre aqui?")
  ); // 5 

console.log(
  myFunction("as", "Quantas vezes o valor de 'a' ocorre aqui?")
  ); // 1

console.log(
  myFunction("q", "Quantas vezes o valor de 'a' ocorre aqui?")
  ); // 2