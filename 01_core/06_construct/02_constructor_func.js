//생성자 함수

//객체 리터럴에 의한 객체 생성
const student1= {
    name : "양무",
    age : 150,
    getInfo(){
        return`${this.name} 은 ${this.age}세 입니다`;
    }
};
//생성자 함수에 의한 객체 생성
//객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여
//프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다

function Student(name,age) {
    this.name = name;
    this.age = age;
    this.getInfo = function (){
        return `${this.name}은 ${this.age}세 입니다`;
    }
}
const student2 = new Student("장보고",40);
const student3 = new Student("이순신",30);

console.log(student3.getInfo());
console.log(student2.getInfo());