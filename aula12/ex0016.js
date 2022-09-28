let agora = new Date()
let hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12){
  console.log('Bom dia!')
}else if (hora < 18) {
  console.log('Boa tarde')
} else if (hora < 22) {
  console.log('Boa noite!')
} else if (hora < 5){
  console.log('É de madruga')
} else {
  console.log('Ta fazendo o que acordado essa hora? Vá dormir!')
}