//자바 스크립트 엔진은 불리언 타입이 아닌 값을 truthy falsy로 구분
//암묵적타입변환

let test1;
console.log(!!test1);
//객체 리터럴
let test = {

    a : null,
    b : 1,
    fun(){
        console.log("testtest");
        return null;
    }
}
if(test.b){
    console.log(true);
}else {
    console.log(false);
}
console.log(test);

console.log(test.fun());

test?.b ? console.log(true) : console.log(false);