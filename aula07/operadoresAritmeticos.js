var primeiroNumero = 5+2
var segundoNumero = 5-2
var terceiroNumero = 5/2
var quartoNumero = 5*2

/*
Lembrando que a ordem de precedencia é: () - ** - *, +, -, /
** exponencial
% resto de divisao 
o console.log() mostra na tela o que for dentro dos (). 
*/

console.log(primeiroNumero % segundoNumero)
console.log(primeiroNumero++)
console.log(primeiroNumero--)
console.log(--segundoNumero)
console.log(++segundoNumero)
console.log(segundoNumero+= 5)

/*
o += é basicamente a variavel mais o valor. Por exemplo >>> 
n = n + 5
n += 5
o ++ é um auto-incremento, podendo assim criar um contador
n++ >>>> n = n + 1
*/