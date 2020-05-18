const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
const user = usuarios.map(function({idade}){
    return idade
})

const filter = usuarios.filter(function({idade}){
    return idade >= 18 
})
const fill = usuarios.filter(function({idade}){
    return idade*2 <= 50 
})

const find = usuarios.find(function({empresa}){
    return empresa == "Google"
})

console.log(fill)
console.log(find)
console.log(filter)
console.log(user)
