
//프로퍼티 접근

let dog = {
    name : "복희",
    eat : function (food) {
        console.log(`${this.name}은 ${food}를 잘먹어요`);
    }
};
console.log(dog.name);
dog.eat("고구마");
// [키]와 (밸류)
dog['eat']('고구마');
console.log(dog['name']);

let obj = {
    'dash-key' : 'dash-value',
    0:1
};
//식별자 네이밍 규칙
//허용되는 문자
//영문자, 숫자 (첫 글자는 올 수 있음)
//예약어는 사용할 수 없음
//대소문자를 구분함
//카멜케이스로 작성함

console.log(obj["dash-key"]);
// console.log(obj[dash-key]);
console.log(obj[0]);
// console.log(obj.0);

