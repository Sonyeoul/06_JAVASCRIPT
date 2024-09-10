/*
 숫자타입
 자바의 경우 정수와 실수를 구분해 다양한 숫자 타입을 제공함
 하지만 자바스크립트의 경우 하나의 타입만 존재한다
 자료형의 크기가 동적으로 달라진다
*/

let integer = 50;
let double = 5.5;
let negative = -10;
integer = "야미";

console.log(integer);
console.log(10/-0);
console.log(1*"문자열");

/*
    문자열 타입
    문자열 타입은 텍스트를 나타내는데 사용한다
    작은 따옴표, 큰 따옴표, 빽틱으로 텍스트를 감싼다
    자바는 문자열을 객체로 표현하지만 자바스크립트는 원시 타입이다
*/
let String;
String = "java";
String = 'java';
String = `java`;

console.log(String)
let string = '작은 따엄표로 감싼 문자열 내의 "큰 따옴표"는 문자열로인식';
string = "큰따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";
console.log(String);
console.log(string);

//템플릿 리터럴
//ES6 부터 도입된 멀티라인 문자열

let str = "안녕 \n 입니다"
let multi = `안녕하십
니까?`
console.log(str);
console.log(multi);

let firstName = "손";
let listName = '정원'
console.log("안녕하세요"+ firstName+listName+"입니다");
console.log(`안녕하세요 ${firstName}${listName} 입니다`);

/*
    undefined 타입
    let 키워드로 선언한 변수는 암묵적으로 undefined 으로 초기화된다
    변수를 선언한 이후에 값을 항당하지 않은 변수를 참조하면 undefined가 반환됨
    yndefined 는 자바스크립트 엔진이 변수를 초기화할때 사용하는 값이고
    개발자가 의도적으로 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있다
    그렇기 때문에 의도적인 빈 값은 null을 주는것이 바람직함*/

let test;
console.log(test);
 // null 타입 변수에 값이 없다는것을 의도적으로 명시할떄

let nullType = 'somyhing';
nullType = null;
console.log(nullType);