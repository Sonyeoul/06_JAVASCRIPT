//불리언 타입으로 형변함

console.log("--불리언 타입으로 형변환")
/*
* 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분
* Truthy 참으로 평가되는 값 Falsy 거짓으로 평가되는 값
* Truthy > true, Falsy > false 로 암묵적 타입 변환된다.
* */
if (true) console.log("if(true)");
if (false) console.log("if(false)");
if("") console.log('if("") ');
if ("yam") console.log("if('yam')");
if(null) console.log("if(null)");
if(undefined) console.log("if(undefined)");
if(0) console.log("if(0)");
if (NaN) console.log("if(NaN)");