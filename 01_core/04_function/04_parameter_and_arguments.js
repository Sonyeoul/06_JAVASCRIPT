// 매개변수와 전달인자

function hello(name) {
    //매개변수는 함수 몸체 내부에서 참조가능
    console.log(name);
    //모든 인자는 암묵적으로 arguments객체의 프로퍼티로 보관한다
    console.log(arguments);
    return `${arguments[1]}님 안녕하세요`
}
result =hello("얌");
console.log(result);

// console.log(hello("얌"));

result = hello();
console.log(result);

//매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//함수는 매개변수의갯수와 인자의 갯수가 일치하는지 체크하지않음
//인수가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다
//매개변수보다 인수가 더 많은 경우 초과된 인수는 무시한다
//모든 인수는 암묵적으로 arguments에 보관된다
result = hello("쿠릉크릉","캉캉");
console.log(result);

//인수를 전달하지 않았을 경우, undefined 를 전달하였을 경우
//ES6에서 도입된 매개변수 기본값을 사용가능

function hu(name = "아무개"){
    if(arguments.length !==1 || typeof name !== "string" || name.length === 0){
        throw new TypeError("인수는 1개 여야하고 문자열이며 빈문자열을 허용하지않음")
    }
    return `${name} 안녕`;
}
result = hu("5");
console.log(result);

function hello(name) {
    return `${name} 안녕`;
}
//반환문은 리턴 키워드 뒤에 오는 값을 반환
console.log(hello("구구구"));
//반환 값을 명시적으로 지정하지 않으면 undefined 가 반환됨
function func() {
    console.log("함수 호출됨");
    b = 10+20;
    return b;
}
console.log(func());
//함수를 매개변수로 전달하는 것도 가능

const test = () => {
    console.log("test");
}

function result1(a) {
    a();
}
result1(test);