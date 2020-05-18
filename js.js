const ar=[1,2,3,4,5,6,7]

const newarr = ar.map(function(item , index){
    return item *index
})

console.log(newarr)

const sum = ar.reduce(function(total, next){
    return total + next
})

console.log(sum)

const filter = ar.filter(function(item){
    return item %2 == 0
})
console.log(filter)

const find = ar.find(function(item){
    return item == 4
})

console.log(find)

const newar = ar.map((item)=>item*2)

console.log(newar)

const soma =(a=3, b=6) => a+b

console.log(soma(1))
console.log(soma())
