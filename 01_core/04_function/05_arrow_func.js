/*
* ES6에서 도입된 화살표 함수는 function 키워 대신
* 화살표를 사용해 좀더 간략한 방법으로 함수를 선언할 수 있다
* 화살표 함수는 익명 함수로 정의한다 본문이 한줄인 함수를 작성할때 유용하다*/
let message;
//기존 func
message = function (){
    return "yolo";
}
console.log(message());

message = () => {
    return "Array func";
}
console.log(message());
//명령문이 하나만 있을 경우 중괄호 생략 가능
message = () => "Array Func are Simple!";
//이 때 함수 몸체 내부의 문이 값으로 평가될 수 있다면 암묵적으로 반환
console.log(message());
//매개변수가 있는 경우
message = (val1,val2)=> "Arrow"+val1 +val2;
console.log(message("Func","!"));
//매개변수가 하나면 소괄호 생략가능
message = val => "Arrow"+val;
console.log(message("Func"));
//구조 분해 할당

let obj = {
    a: "test",
    b: "value",
    c: "simple"
}
const test = ({a,c}) => `hi ${a}+${c}`;
console.log(test(obj));