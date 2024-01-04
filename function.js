function addTwoElements(a, b) {
    return a+b;
}
var a = 10;
var b = 20;
var total = addTwoElements(a, b);
console.log(total);

function test(){
    return "Hello";
}
function test2(){
    return test()+ " World";
}
var result = test2();
console.log(result);