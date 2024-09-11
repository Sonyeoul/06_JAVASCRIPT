//함수 호이스팅

console.log(hello);
// console.log(hi);

console.log(hello("홍홍"));
// console.log(hi("홍"))
function  hello(name) {

        return `${name}님 안낭하세욥`;
}
let hi = function (name) {
    return `${name}님 안낭하세욥`;
}
console.log(hi);
/*
* 함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다
* 따라서 함수 선언문 이전에함수를 참조할 수 있으며 호출할 수도 있다
* 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는
* 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다
* */

function test() {
    return  console.log("이거랑");
}
function test() {
    console.log("느앙");
    return  console.log("이거 중 어떤게");
}

console.log(test());

console.log("----------");


var funTest=() => {
    console.log("2");
}
console.log(funTest());
let funTest=() => {
    console.log("3");
}
console.log(funTest());

let funTest1=() => {
    console.log("6");
}
funTest1();