//in 연산자
//프로퍼티 존재 여부 확인
// for 문과 함께 객체 내부 키 순회

let student = {
    name : "유산슬",
    age : 45,
    test : undefined
}

for(let i=0;i<student.length;i++){
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}

console.log("name" in student);
console.log("age" in student);
console.log("test" in student);
console.log("tedw" in student);

// for(let key in student){
//     //console.log(student[key]);
//     console.log(`key : ${key}`);
//     key.length
//     console.log(`student[key] : ${student[key]}`);
// }