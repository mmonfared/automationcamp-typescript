export let carName = 'BMW'

interface Car {
    brand: string,
    model: string,
    build: number
}
function move() {
    console.log('Car is moving')
}

class CarClass {
    changeGear(upOrDown: string) {
        console.log(`Changing the gear ${upOrDown}`)
    }
    brake() {
        console.log('Car is stopping')
    }
}

export {move}

export {CarClass as MyClass}

export default Car
