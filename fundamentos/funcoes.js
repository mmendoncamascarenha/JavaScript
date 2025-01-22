/**
 * Estudo das funções 
 */

//Função simples (literal)
function hello(){
    console.log("Hello function")
}
console.log(typeof(hello))
hello()


//Função atribuída
const hello2 = function (){
    console.log('Hello function assigned')
}

console.log(typeof(hello2))
hello2()

// arrow function => (simplificação da função atribuída)
const hello3 = () => {
    console.log('Hello arrow function')
}

console.log(typeof(hello3))
hello3()

//Funções com passagem de parâmetros e retorno
//Funções simples

function somarS(num1, num2){
    return (console.log(num1 + num2))

}

somarS(2, 3)

// Função atribuída 
const somarA = function(num1, num2){
    return(console.log(num1 + num2))
}

somarA(4, 5)

// ARROW FUNCTION 
const somarAF =(num1, num2) => {
    return(console.log(num1 + num2))
}

somarAF(7, 8)

//Arrow function simplificada(retorno é implicito)
const  somarAfS = (num1, num2) => console.log(num1 + num2)

somarAfS(2, 2)
