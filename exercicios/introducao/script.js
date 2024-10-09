
// tipos de variáveis:
let idade = 7 // tipo number
let nome = "Lilian" // tipo string
let logado = false // tipo boolean

console.log(idade + 5)

//array e objeto

//criando uma lista comum
//let ingrediente1 = "agua"
//let ingrediente2 = "farinha de trigo"
//let ingrediente3 = "leite"

//criando lista com array []

let ingrediente = ["agua", "farinha de trigo", "corante"]

console.log(ingrediente)
console.log(ingrediente[1])

//objeto - característica/propriedade {}

let personagem = {
    nome: "Leide",
    idade: 50,
    trabalho: "caixa",

}
console.log(personagem.trabalho)

//funções

//input - manda dados
//processa
//output - retorno

function somar(a, b) {
    let resultado = a + b
    return resultado 
}

let somar2 = (a,b) => {
    let resultado = a + b
    return resultado 
}

let x = somar(2,2)
let y = somar2(7,3)

console.log(x)
console.log(y)

//condicional - SE/IF

if (idade >= 18) {
    console.log("você é maior de idade")

} else {
    console.log("você ainda é menor de idade")
}

 //loop 
  let lista = [10, 20, 30, 40]

  for(let item of lista) {
    console.log(" - " + item)
  }
 