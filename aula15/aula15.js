let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1) {
  console.log('O valor nao foi encontrado')
} else {
  console.log(`O valor 8 está na posicao ${pos}`)
}