//프로퍼티 값 변경, 추가 ,삭제

let dog ={
    name : '흰둥이'
}

dog.name = "복희";
console.log(dog);
console.log(dog.name);
//프로퍼티 동적 추가
dog.age = 5;
console.log(dog);
//프로퍼티 삭제 delete 연산자
//존재하지 않는 프로퍼티를 삭제하면 에러없이 무시된다
delete dog.age;
console.log(dog);
delete dog.age;

