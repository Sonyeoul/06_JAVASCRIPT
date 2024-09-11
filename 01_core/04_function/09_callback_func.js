//콜백함수
/*
* 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를
* 콜백함수라고 한다 매개변수를 통해 함수의 외부에서
* 콜백 함수를 전달받은 함수를 고차함수라고 한다
* 콜백 함수는 고차 함수에 전달된다
* 즉. 고차 함수는 ㅗㄹ백 함수를 자신의일부분으로 합성한다
* */

function increase(val){
    return val+1;
}
function decrease(val){
    return val-1;
}
function apply(func,value){
    return func(value);
}
console.log(apply(increase,5));
console.log(apply(decrease,5));

console.log(apply(function (value){return value**2;},19));

//비순수 함수  :외부상태에 의존하거나 외부상태를 변경하는 함수

var cnt = 0;

//순수 함수는 최소 하나 이상의 인수를 전달 받으며
//인수의 불변성을 유지한다

function increase(n){
    return ++n;
}
cnt = increase(cnt);
console.log(cnt);

function decrease(){
    return --cnt;
}
cnt = decrease();
console.log(cnt);