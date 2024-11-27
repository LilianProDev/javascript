let num = [1, 5, 8, 7, 4]

num.push(9)
num.sort()
console.log(num)
console.log("Nosso vetor tem : " + num.length)
console.log( "Valor do vetor : " +  num[2])

let pos = num.indexOf(10)

if (pos == -1) {
    console.log("O valor nao foi encontrado")
} else {
    console.log(`O valor 8 está na posição ${pos} `)
}
