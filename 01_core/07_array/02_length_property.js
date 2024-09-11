

//length 는 요소의 갯수를 나타내는 0 이상의 정수를 값으로 갖는다
console.log([].length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

arr.push(6);
console.log(arr.length);

arr.pop();
console.log(arr.length);


arr.length = 3;
//현재 length를 3으로 줄여버린다

//현재의 length보다 큰값을 할당하면
arr.length = 10;
console.log(arr);

const arr2 = [null,2,4];
console.log(arr2);