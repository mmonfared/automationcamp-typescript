// [number, string, boolean, undefined, null]
// [NaN, infinity, any, array, tuple, object]
// [enum, unknown, never]

//number 
let num1 = 10; // number
let num2 : number; // number
let num3: number = 10.6; //number

//string
let str1 = 'Hello' // string
let str2 : string = 'Bye' // string

// boolean
let bool1 = false // boolean
let bool2: boolean // boolean
let bool3: boolean = !true // boolean

// let z = num1 + bool1 // error

// undefined / null
let undef1; // undefined
let null1: null = null //

console.log(undef1)
console.log(typeof(num3))

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
 // null || undefined != ''
 // null || undefined != flase
 // null || undefined != 0
