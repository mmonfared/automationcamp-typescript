type UserX = {
    name: string,
    age: number,
    isVerified: boolean
}

type UserX = {
    // name: string,
    // age: number,
    // isVerified: boolean,
    gitHubID: string
}

interface User  {
    name: string,
    age: number,
    isVerified: boolean
    readonly googleID: string,
    // startTrial: () => string
    startTrial(): string
}

interface User {
    gitHubID: string
}

interface UserAdmin extends User {
    deleteRole: boolean
}

let userX: User = {
    name: "Jack",
    age: 21,
    googleID: "googleIDXXDE",
    isVerified: true,
    gitHubID: "gitHubID",
    startTrial() {
        return "x"
    },
}
userX.googleID = "jehkej"
userX.age = 23