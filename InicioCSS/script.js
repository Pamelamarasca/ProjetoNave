console.log("hellow wolrd!");
let RTS, MOBA, RPG;
RTS = "Warcraft III"

console.log(RTS)
console.log('----part6----')
//pt 1
function vet(...rest) {
    result = rest;
    console.log('vem')
    console.log(...result)
}

const obj1 = {
    name: 'Pâmela'
}

const obj2 = {
    idade: '22'
}


//pt 2
function desc({ name } = obj1) {
    return name;
}
resultt = desc();
console.log(resultt)

//pt 3
function conc(obj1, obj2) {
    const newObj = {
        ...obj1,
        ...obj2
    }
    return newObj;
}
const result = conc(obj1, obj2);
console.log(result)

const arr1 = [1, 3, 5, 7, 9]
const arr2 = [0, 2, 4, 6, 8]

//pt 4
function Rarray() {
    const newArr = [...arr1, ...arr2]
    return newArr;
}
const resultArr = Rarray(arr1, arr2);
console.log(resultArr.sort())