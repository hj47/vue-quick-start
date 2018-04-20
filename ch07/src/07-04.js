// spread operator
let arr = [10,20,30]
let arr2 = [1,2,3, ...arr]

console.log(arr2);

let obj = { name : "jane" , age: 30}
let obj2 = { ...obj}

console.log(obj === obj2);

