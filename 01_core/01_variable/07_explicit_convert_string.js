/* 명시적 타입 변환
*
* 문자열 타입으로 변환
* */
console.log('=======');

//1. String 생성자 함수를 new 없이 호출

console.log(String(10));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
//object.prototype.tostring 메서드 사용
console.log((10).toString());
console.log((NaN).toString());
console.log((Infinity).toString());

