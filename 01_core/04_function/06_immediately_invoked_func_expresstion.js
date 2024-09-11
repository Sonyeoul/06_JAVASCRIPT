//즉시 실행 함수
//함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출할 수 있다

//함수 이름이 없는 익명 함수를 사용하는것이 일반적이다
(function (){
    console.log("익명 즉시 실행 함수!");
})();
//함수 이름도 작성할 수 있지만 해당 이름으로 다시 호출할 수는 없다.
(function hi(name) {
    console.log("기명 즉시 실행 함수");
    console.log(`${name} 하이`);
})("얌");
