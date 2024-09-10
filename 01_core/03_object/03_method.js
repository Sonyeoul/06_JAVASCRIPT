/*
* 자바스크립트 함수는 프로터피 값으로 사용할 수 있다
* */
let dog = {
    name : "복희",
    eat : function (food) {
        console.log(`${this.name}은 ${food} 잘먹어요`);
    }
  //  eat : (food) =>{
    //     console.log(`${this.name}는 ${food}를 맛있게 먹음`)
    // }
};
dog.eat("고구마");