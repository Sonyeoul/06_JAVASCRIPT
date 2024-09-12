
//array
//배열은여러 개의 값을 순차적으로 나열한 자료구조이다

//1. 배열 리터럴을 통해 배열 생성
const arr = ['바니니','버니니','보니니'];
console.log(arr);

//2. 배열 생성자 함수

const arr2 = new Array();
console.log(arr2);
const arr3 = new Array(10);
console.log(arr3);

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열 생성
const arr4 = new Array(1,2,3);
console.log(arr4);

//3. Array.of 메서드
//전달된 인수를 요소로 갖는 배열 생성
console.log(Array.of(1,2,3));
console.log(Array.of(10));
console.log(Array.of("hgor","dwdw"));

//배열의 요소는 자신의 위치를 나타내는 인덱스를가진다
//요소에 접근할때는 대괄호 표기법을 사용한다

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//배열은 객체 타입이다
console.log(typeof arr);

//자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로
//모든 값이 배열의 요소가 될 수 있다
const arr5 = [
    true,
    "양",
    "고",
    "아",
    [],
    arr3
];
console.log(arr5);