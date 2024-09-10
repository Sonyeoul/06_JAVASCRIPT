/*
* 비교 연산자
* 좌항과 우황의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다
* if문이나 for 문과 같은 제어문의 조건식에서 주로 사용한다
*
* 동등비교 / 일치 비교
* 동등비교 == , != 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교
* 일치비교 ===,!== 연산자는 타입과 값이 모두 일치하는지 비교한다
* */

// 숫자 1, 문자 '1', ture 비교

console.log(`1=="1" : ${1==`1`}`);
console.log(`1==true : ${1==true}`);
console.log(`1==="1" : ${1==='1'}`);
console.log(`1=== true: ${1===true}`);

//숫자 0 문자 '0' 빈문자열'' , false 비교
console.log(`0 == "0" : ${0=='0'}`);
console.log(`0 == "" : ${0==''}`);
console.log(`0 == false : ${0==false}`);
console.log(`0 === "0" : ${0==='0'}`);
console.log(`0 === "" : ${0===''}`);
console.log(`0 === false : ${0===false}`);

console.log(`number : isNaN : ${Number.isNaN(NaN)}`);

// 대소비교
console.log(`apple < bababa : ${'apple'<'banana'}`);
console.log(`cat < Dog : ${'cat'<'Dog'}`);

console.log('apple'||"banana");
console.log(null&&"banana");

let num = 1;
if(num % 2 ==0){
    console.log(`짝수`);
}else{
    console.log('홀수')
}
num % 2 == 0 && console.log("짝수입니다");
num % 2 == 1 && console.log("홀수입니다");


let obj = null;
//객체라고 기대하는 변수가 null 또는 undefined 일때