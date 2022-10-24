let contador = 1
  while (contador <= 10) {
    console.log(`Contando ${contador} `)
    contador++
  }

  /* 
  Enquanto a condição for verdadeira, o comando será executado, 
  quando se tornar falsa o fluxo é desviado para fora do bloco
  */

  do {
    console.log('Contando com do')
    contador++
  } while (contador <= 10)

/*
Primeiro executo o bloco, depois faço o teste, se o teste for verdadeiro
ele faz o looping e executa o bloco  
*/