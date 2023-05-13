let uVar1: string | number 
uVar1 = 12
uVar1 = "hello"
uVar1= false

let uArr1: (string | number | boolean)[] = ['a', 'b', 3, false]

function applyNewUserDiscount(price: number | string): number {
    // Narrowing
    if (typeof price === "string") {
        price = parseInt(price)
    }
    return price - (price * 0.3)
}

let company: 'Google'
company = "Google"

let size: 'S' | 'L' | 'XL'
size = 'S'

type y = string | number 

type Admin = {email: string, id: number, canModify: true}
type Member = {email: string, id: number, canModify: false}
type Manager = Admin | Member
