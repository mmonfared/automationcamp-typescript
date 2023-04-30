// Enum
// const economy = 0;
// const business = 1;
// const first = 2;

const enum FlightClass {
    ECONOMY,
    BUSINESS,
    FIRST
}

const passenger1 = FlightClass.ECONOMY

let passengerClass: FlightClass = FlightClass.BUSINESS

// Unknown

let var1: any
var1 = 'hello'
var1 = 12
var1 = false

let var2: unknown
var2 = 'hello'
var2 = 12
var2 = false 

let s1: string = var1 
let s2: string = var2
let int1: number = var2 

var1.method()
var2.method()
