//전역 스코프와 지역 스코프
/*
* 전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다
* 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며
* 전역 변수는 어디서든지 참조할 수 있다
* 지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다
* 지역에 변수를 선언하면 지역 스코프를 갖는 지역변수가 되며
* 자신의 지역 소크프와 하위에서 유용하다
* */

let x = "global X";
let y = "global Y";

function outer() {
    let z = "outer of local";
    console.log(z);
    console.log(x);
    console.log(y);
    function inner(){
        let x = "inner";
        console.log(z);
        console.log(x);
        console.log(y);

    }
    inner();
    console.log(inner());
}
console.log(outer());

//자바, c 등 대부분의 프로그래밍 언어는
//함수 몸체 뿐만 아니라모든 코드 블록
//지역 스코프를 만드는 블록레벨 스코프를 가진다
//하지만 var 키워드로선언된 변수는 오로지 함수의 코드 블록만을
//지역 스코프로 인정하는 함수 레벨 스코프를 가진다
//ES6에 도입된 let 키워드는 블록 레벨스코프를 지원한다

var i = 0;
for(var i=0;i < 10;i++){}
console.log(i)