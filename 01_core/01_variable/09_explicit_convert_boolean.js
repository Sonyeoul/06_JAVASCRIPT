//불리언 타입으로 변환

// 1. Boolean 생성자 함수를 new 연산자 업이 호출

console.log(Boolean("java"));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));

console.log(Boolean([]));
console.log(Boolean({}));
console.log('=======')

//2. 부정연산자를 두번 사용하는 방법
console.log(!!"java");
console.log(!!"");
console.log(!!1);
console.log(!!0);
console.log(!!NaN);