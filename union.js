var uVar1;
uVar1 = 12;
uVar1 = "hello";
uVar1 = false;
var uArr1 = ['a', 'b', 3, false];
function applyNewUserDiscount(price) {
    // Narrowing
    if (typeof price === "string") {
        price = parseInt(price);
    }
    return price - (price * 0.3);
}
var company;
company = "Google";
var size;
size = 'S';
