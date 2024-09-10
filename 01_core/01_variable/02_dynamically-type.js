/*
정적 타입 언어 c,fava,c++
변수를 선언할 때 데이터 타입을 사전에 선언해야한다
변수의 타입을 변경할수 없으며, 변수에 선언한 타입에맞는 값만 할당할 수 있다
컴파일 시점에서 타입 체크를 수행하는 타입의 일관성을 강제하여런타임 에러를 줄일수있다

동적 타입 언어는
자바스크립트는 var let const 키워드를 사용해 변수를 선언할 뿐 데이터 타입을 사전에 선언하지 않는다
즉 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정되며 재할당에 의해
변수의 타입이 언제든지 동적으로 변 할 수 있기때문이다
변수의 값이 언제든지 변경될 수 있기 때문에 값을 확인하기 전에는 타입을 확실할 수 없다
개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입변환이 되기때문에
즉 유연성은 포지만 신뢰성은 떨어진다
이로 인해 변수를사용하기 전 데이터 체크를 하기도하는데 이는 번거롭고 코드의 양도증가한다
* */

let test;
console.log(typeof test);

test = 1;
console.log(typeof test);
test = "java";
console.log(typeof test);