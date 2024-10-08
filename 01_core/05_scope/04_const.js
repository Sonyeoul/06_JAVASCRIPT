//const
//const 키워드는 상수를 선언하기 위해 사용
//let 키워드와 마찬가지로 블록 레벨 스코프를 가지며
//변수 호이스팅이 발생하지 않는 것처럼 동작한다
//아래에서 let 키워드와 다른 점을 중심으로 살펴본다

//const 키워드는 선언과 동시에 초기화 해야한다.
const x = 1;

//재할당이 금지된다

y =x-1;
//일반적으로 상수의이름은 대문자로 선언 스네이크 케이스로 표기

//할인률
const DISCOUNT_RATE = 0.15;
//정가
let price = 20000;
let discountPrice = price * DISCOUNT_RATE;
console.log(discountPrice);
// const 객체 안에 있는건 할당 가능
const student = {
    age:20,
    name : "홍"
}
student.name = "얌";
console.log(student);


/*
* 전역 변수의 문제점
* 1. 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용
* 변수의 유효 범위가 클수록 코드의 가독성은 떨어지고 의도치 않게 변경될 위험성이 높아진다
* 2. 전역 변수는 생명주기가 길다
* 메모리 리소스도 오래  소비하며, 상태 변경이 가능한 시간 및 기회가 많다
* 더욱이 중복 된 변수명을 통해 의도치 않은 재할당이 일어날 수 있다
* 3. 스코프 체인 상애서 중점에 존재하기 때문에 검색 속도가 가장 느리다
* => 변수의 스코프는 좁을수록 좋다
* */