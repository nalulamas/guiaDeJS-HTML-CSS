let valores = [8,1,7,4,2,9]
//console.log(valores)

// for (let pos = 0; pos < valores.length; pos++) {
//   console.log(`A posicao ${pos} tem valor ${valores[pos]}`)
// }

for(let pos in valores){
  console.log(`A posicao ${pos} tem valor ${valores[pos]}`)
}