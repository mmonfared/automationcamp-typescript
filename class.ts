class Customer {
    // name: string
    // // public name: string
    // private email: string
    // readonly phone: string
    private _productCount = 1
    readonly country: string = "Iran"
    constructor (
        name: string,
        private email: string,
        phone: string) {
        // this.name = name,
        // this.email = email
        // this.phone = phone
    }
    get productCount (): number {
        return this._productCount
    }

    set productCount(newValue: number) {
        this._productCount = newValue
    }

}

class CustomerManager extends Customer {
    panelAccess: boolean = true;
    updateProductCount() {
        this.productCount = 4
    } 
}

const customer1 = new Customer("Mohammad", "m@m.com", "+18005212454")
console.log(customer1.productCount)
console.log(customer1.productCount)
customer1.productCount = 5
console.log(customer1.productCount)
// console.log(customer1.email)
// console.log(`Phone: ${customer1.phone}`)
// customer1.phone = "+00121493"
// console.log(`Phone: ${customer1.phone}`)

const manager1 = new CustomerManager("Jack", "r@r.com", "+180052445622")
console.log(manager1.productCount)
