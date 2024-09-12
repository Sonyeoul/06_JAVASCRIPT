
//배열메서드

const arr = [];
const arr2 = Array(arr);

//indexOf : 배열에서 요소가 위치한 인덱스를 리턴
//lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
//includes : 배열에 해당 요소 포함 여부 리턴

const foodList = ["물회",'라면','제육'];

console.log(`foodList: 물회 인덱스 ${foodList.indexOf("물회")}`);
console.log(`foodList: 물회 인덱스 ${foodList.indexOf("물회",1)}`);
console.log(`foodList: 물회 인덱스 ${foodList.lastIndexOf("물회")}`);
console.log(`foodList: 물회 인덱스 ${foodList.includes("물회")}`);

const chineseFood = ["짜장면","짬뽕","탕수육"];

console.log(`push 전 chineseFood : ${chineseFood}`);
chineseFood.push('칠리새우');
chineseFood.push('유린기');
console.log(`push 후 chineseFood : ${chineseFood}`);

console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);

console.log(`pop 후 chineseFood : ${chineseFood}`);

//unshift : 배열의 맨 앞에 요소 추가
//shift  : 배열의 맨 앞 요소 반환 후 제거

chineseFood.unshift("탕수육");
chineseFood.unshift("칠리새우");

console.log(`unshift 후 chineseFood : ${chineseFood}`);
console.log(`shift() : ${chineseFood.shift()}`);
console.log(`shift() : ${chineseFood.shift()}`);
console.log(`shift 후 chineseFood : ${chineseFood}`);

const idol1= ['아이브','에스파'];
const idol2 = ['뉴진스','르세라핌'];
const idol3 = ['핑클','SES'];

const mix = idol1.concat(idol2);
console.log(mix);
const mix2 = idol3.concat(idol2,idol2);
console.log(mix2);

//slice : 배열의 요소 선택 잘라내기
//splice : 배열의 인덱스 위치 요소 제거후 추가
const front = ["html","css","javascript",'jQuery'];

console.log(`front.slice(1,3) ${front.slice(1,3)}`);
console.log(front);

//splice(인덱스, 제거수, 추가값1, 추가값2...)
console.log(`front splice(3,0,"react"):${front.splice(3,0,"react")}`);
console.log(front);
console.log(`front splice(4,1,"flutter"):${front.splice(4,1,"flutter")}`);
console.log(front);

//join : 배열을 구분자로 결합하여 문자열로 반환
console.log(`join ${front.join()}`);
console.log(`join ${front.join("/")}`);
console.log(front);

//reverse 배열의 순서를 뒤집음

console.log(`${front.reverse()}`);


//배열 정렬 기준
let number = [];
for(let i = 0; i <10; i++){
    number[i]= Math.floor(Math.random()*1000)+1;
}
console.log(number);

//다른 정렬 기준을 사용하려면 매개변수로 compare 함수전달

function compare(a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
 }
// number.sort(compare);
// console.log(number);

    number.sort((a, b) => b-a);
    console.log(number);
