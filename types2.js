// NaN
console.log(4 - 'hello');
// Infinity
console.log(2 / 0);
console.log(-2 / 0);
// Any
var n1;
n1 = 'hello';
n1 = 12;
n1 = false;
var a1;
// Arrays
var arr1 = [1, 'string', false];
arr1 = [1, 'string', false, 2];
var arr2 = [1, 2, 'hello'];
var arr3 = [2, 3, 4];
var arr4 = [2, 3, 'string'];
var images = [[255, 255, 255], [250, 14, 15]];
arr1.push('string');
arr1.push(52);
arr1.push(false);
arr2.push('string');
console.log(arr1[1]);
console.log(arr1);
// Tuples 
var tup1;
// tup1 = ['hello', 2, true, 4]
tup1 = ['hello', 2, true];
var member1 = tup1[0];
console.log(member1.substring(2));
// Object
var obj = { name: "Jack", age: 18, id: 25 };
console.log(obj.name);
obj.age = 12;
console.log(obj);
obj = { name: "David", age: '20' };
var user = {
    name: "Jack",
    age: 25,
    isVerified: false
};
user.age = 26;
user.isVerified = true;
