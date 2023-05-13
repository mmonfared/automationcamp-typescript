var Customer = /** @class */ (function () {
    // name: string
    // // public name: string
    // private email: string
    // readonly phone: string
    function Customer(name, email, phone) {
        this.email = email;
        // this.name = name,
        // this.email = email
        // this.phone = phone
    }
    return Customer;
}());
var customer1 = new Customer("Mohammad", "m@m.com", "+18005212454");
console.log(customer1.email);
console.log("Phone: ".concat(customer1.phone));
customer1.phone = "+00121493";
console.log("Phone: ".concat(customer1.phone));
