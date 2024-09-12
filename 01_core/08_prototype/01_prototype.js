
//프로토타입
/*
* 모든 객체는 자신의 부모 객체로 연골되는
* 프로퍼티인 prototype을 가지고 있다
* 이 때 상속을 받는 부모 객체를 프로토타입 이라고 부른다
* 객체가 특정 프로퍼티나 메소드를 찾을 때 먼저 그 객체에서 찾고 없으면
* 객체의 프로토타입에서 찾는다
* 프로토타입이 또 다른 프로토타입을 가지며 부모 객체를 따라 올라가고
* 프로토타입 체인이 형성된다.
* */

const obj = {};
console.log(obj.toString());
console.log(Object.prototype.hasOwnProperty("toString"));

const obj2={
    toString(){
        return "custom toString";
    }
};
console.log(obj2.toString());
//Object.create 이용한 상속
const user = {
    greet(){
        console.log(`hi ${this.name}`);
    }
};
const student
    = Object.create(user);
student.name = "양길동";
student.study = function (){
    console.log(`${this.name}은 공부중`);
}
student.study();
student.greet();

// __proto__ 는사용하지않는 것을 권장한다
// 안전성, 선능, 명확 관련 문제가 많기 때문에
//그래서 ES6 이후로는 extends 를 이용한 클래스 기반 상속을 많이 사용한다
class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`hi ${this.name}`);
    }
}
class Student extends User{
    constructor(name,grade) {
        super(name);
        this.grade = grade;
    }
    study(){
        console.log(`${this.name} 님은 ${this.grade} 학년에서 공부중`);
    }
}
const student1 = new Student("홍길", 3);
student1.greet();
student1.study();