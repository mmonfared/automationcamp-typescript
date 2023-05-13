namespace Chinese {
    export let food = "Sushi"
    export class Kitchen {
        make() {
            console.log('Making Chinese food')  
        }
    }
}

namespace Italian {
    export let food = "Pizza"
    export class Kitchen {
        make() {
            console.log('Making Italian food')  
        }
    }
    function delivery() {
        console.log("Your Italian food is ready")
    }
}


console.log(Chinese.food)
console.log(Italian.food)