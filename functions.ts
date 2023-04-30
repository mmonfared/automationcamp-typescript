function sumOfNumbers (num1: number, num2: number) : void {
    // if (num1>num2) {
    //     return num1+num2
    // }
    // else {
    //     return "hello"
    // }
    let x = num1 + num2
    return x

}

// const sumOfNumbers2 = (num1, num2) => {
//     return num1+num2
// }

function signUp (email: string, name: string, userType: string='panel') { // [admin, panel]
    // if (userType === undefined) {
    //     userType = 'panel'
    // }
    console.log(`User with name '${name}' and '${email}' email added to the system as a ${userType} type`)
}

signUp("x@test.com", "jack", 'admin')

const fruits = ['banana', 'orange', 'apple']
// const fruits = [1, 2, 3]

fruits.map((fruit: string): string => {
    console.log(`Fruit is ${fruit}`)
    return `Fruit is ${fruit}`
    // return 1
})

function getFullname(fname: string, lname: string, userType: string='panel') {
    let a  = 'admin user'
    if(userType === 'panel') {
        return fname + lname
    }
    else {
        return a
    }
    
}