// null 병합 연산자
//ES11 에서 도입된 연산자로 좌항의 연산자가 null 또는 undefined 인 경우
//우황의 피연산자를 반환하고 그렇지않으면 좌항의 피연산자를 반환
//변수의 기본값을 설정할때 유용

let test = null ?? '기본값';
console.log(test);

//단 빈 문자열은 falsy 취급한다
let value = ''?? '기본값';
console.log(value);