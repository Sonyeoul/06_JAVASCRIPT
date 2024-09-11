


//일반 함수와 다른점
function Student(name,age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}은 ${this.age}세 입니다`;
    }
}
const student = Student("강감찬",35);
console.log(student);
console.log(age);

//ES6 에서는 new.target 을 지원한다
//생성자 함수가 new 없이 호출되는것을 방지하기 위해
function Dog(name,age) {
    if(!new.target){
        return new Dog(name,age);
    }
    this.age = age;
    this.name = name;

}
//대부분의 빌트인 생성자 함수는
//new 연산자와 함께 호출 되었는지를 확인한 후 적절하게 반환
const obj = Object();
console.log(obj);