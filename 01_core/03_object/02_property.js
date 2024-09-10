//객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성된다

let student ={}

let student1={
    name:"유중",
    age:17,
}

console.log(student1)
let obj ={
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "":"",
    0:1,
    var : "var",
    normal :"new normal"
};
let key2 = "test";
obj[key2] = "test value";
console.log(obj);
console.log(obj.test);