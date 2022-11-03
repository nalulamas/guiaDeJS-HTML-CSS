function fatorial(numero) {
  let fatorial = 1
  for(let contador = numero; contador > 1; contador--) {
    fatorial *= contador
  }
  return fatorial
}
console.log(fatorial(5))