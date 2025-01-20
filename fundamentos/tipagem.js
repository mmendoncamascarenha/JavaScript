/**
 * Tipagem dinâmica - JS 
 */



//declaração de variaveis
let nome, idade, peso, altura, vip, imc




//entrada de dados

nome = "murillo mendonça mascarenha"
idade = 17
peso = 75
altura = 1.80 
vip = true 
// a linha abaixo verifica o tipo da variavel
//console.log(typeof(vip))

console.clear()

//processamento
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)


// saída 
console.log("Ficha do aluno")
console.log("________________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`vip: ${vip}`)
console.log(`imc: ${imc.toFixed(2)}`)
console.log(`fcm: ${fcm} bpm`)
