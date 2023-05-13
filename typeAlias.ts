type animal = string 
type appID = number 
// let appID: number
type joinDate = Date 
type bool = boolean 

let a : bool = 'false'
let x: appID = 12

// type User = {
//     name: string,
//     age: number,
//     isVerified: boolean
// }

let user1: User
 = {
    name: "Jack",
    age: 25,
    isVerified: false
 }

 let user2: User
 = {
    name: "Jack",
    age: 25,
    isVerified: false
 }


function updateUser(user: User): User {
    user.isVerified = true 
    return user 
}

type x = string | number
