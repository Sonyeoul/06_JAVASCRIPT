let id = "p-0001";
let price = 3000;

let product ={
    id :id,
    price:price
};
console.log(product);

//ES6 단축문법
let prodeuct2 = {id,price};
console.log(prodeuct2);

//계산된 프로퍼티 이름
let prefix = 'key';
let index = 0;
let obj={};
obj[prefix+'-'+index++] = index;
obj[prefix+'-'+index++] = index;
obj[prefix+'-'+index++] = index;
console.log(obj);

let obj2 ={
    [`${prefix}-${index++}`]:index,
    [`${prefix}-${index++}`]:index,
    [`${prefix}-${index++}`]:index
};
console.log(obj2);

//메소드 단축
let dog = {
    name : "복희",
    eat : function (food) {
        console.log(`${this.name}은 ${food}를 맛있게 먹음`);
    }
};
dog.eat("고구마");

let dog2 ={
    name : '흰둥이',
    eat(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹음`);
    }
}
dog2.eat("감자");