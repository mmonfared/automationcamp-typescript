function returnVal(val: number | string): number | string {
    return val
}

function returnValTwo(val: any): any {
    return val
}

function returnValThree<Type> (val: Type): Type {
    return val
}

interface DocumentCoord {
    docX: string,
    docY: string,
    fixed: boolean
}

returnValThree<DocumentCoord>({
    docX: '145',
    docY: '540',
    fixed: false
})


function getSearch<T> (prods: T[]): T {
    console.log(prods.length)
    const targetIndex = 2
    return prods[targetIndex]
}

const getSerachTwo = <T,>(prods: T[]): T => {
    console.log(prods.length)
    const targetIndex = 2
    return prods[targetIndex]
}

function myFunc<T, U extends string> (varX: T, varY: U): object {
    return {
        varX,
        varY
    }
}

myFunc(2,'5')
myFunc('a', 2)

interface Database {
    username: string,
    password: string,
    connection: string
}

function connectToDatabase <T, U extends Database> (query: string, databaseParams: Database): object {
    const response = "xx"
    const status = 201
    return {
        response,
        status
    }
}

connectToDatabase("SELECT * FROM USERS", {username: "x@x.com",
    password: "adminadmin123",
    connection: "L2VPN"})

