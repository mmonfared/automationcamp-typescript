function sumOfNumbers(num1, num2) {
    // if (num1>num2) {
    //     return num1+num2
    // }
    // else {
    //     return "hello"
    // }
    var x = num1 + num2;
    return x;
}
// const sumOfNumbers2 = (num1, num2) => {
//     return num1+num2
// }
function signUp(email, name, userType) {
    if (userType === void 0) { userType = 'panel'; }
    // if (userType === undefined) {
    //     userType = 'panel'
    // }
    console.log("User with name '".concat(name, "' and '").concat(email, "' email added to the system as a ").concat(userType, " type"));
}
signUp("x@test.com", "jack", 'admin');
var fruits = ['banana', 'orange', 'apple'];
// const fruits = [1, 2, 3]
fruits.map(function (fruit) {
    console.log("Fruit is ".concat(fruit));
    return "Fruit is ".concat(fruit);
    // return 1
});
function getFullname(fname, lname, userType) {
    if (userType === void 0) { userType = 'panel'; }
    var a = 'admin user';
    if (userType === 'panel') {
        return fname + lname;
    }
    else {
        return a;
    }
}
