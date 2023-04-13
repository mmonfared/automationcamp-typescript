// NaN
console.log(4 - 'hello')

// Infinity
console.log(2/0)
console.log(-2/0)

// Any
let n1: any
n1 = 'hello'
n1 = 12
n1 = false
let a1

// Arrays
let arr1 = [1, 'string', false]
arr1 = [1, 'string', false, 2]
let arr2: number[] = [1,2, 'hello']
let arr3: Array<number> = [2,3,4]
let arr4: Array<any> = [2,3,'string'] 
let images: number [][] = [ [255,255,255], [250,14,15]]
arr1.push('string')
arr1.push(52)
arr1.push(false)
arr2.push('string')
console.log(arr1[1])
console.log(arr1)

// Tuples 
let tup1: [string, number, boolean]
// tup1 = ['hello', 2, true, 4]
tup1 = ['hello', 2, true]
let member1 = tup1[0]
console.log(member1.substring(2))

// Object
let obj = {name: "Jack", age: 18, id: 25}
console.log(obj.name)
obj.age = 12
console.log(obj)
obj = {name: "David", age: '20'}