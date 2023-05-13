import { carName as myCar} from "./myModules";

import {move} from "./myModules"

import {MyClass} from "./myModules"

// import {Car} from './myModules'

import anyAlias from ''

import {Car as carInterface} from "./myModules2"

let car1: anyAlias = {
    brand: "BMW",
    model: "i8",
    build: 2021
}

let car2: carInterface = {
    brand: "BMW",
    model: "i8",
    build: 2021
}
console.log(car1)

