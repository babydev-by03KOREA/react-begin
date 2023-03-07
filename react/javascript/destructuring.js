/* Destructuring assignment[비구조화] > 배열이나 객체의 속성 혹은 값을 해체(추출)하여 그 값을 변수에 각각 담아 사용하는 JS 표현식*/
const object = {
    a : 1,
    b : 2
};

/**
 * 값을 추출하여 변수 혹은 상수에 바로 선언
 * object 객체 안에 있는 값을 뽑아서 a와 b 를 각각 선언하겠다.
 * */
const { one, two } = object;

console.log(one);
console.log(two);

/**
 * 함수의 파라미터에서도 비구조화 할당이 가능함 <br/>
 * { b = 2 }와 같이 기본 값을 줄 수도 있다. <br/>
 * 이는 함수의 파라미터에서만 사용 가능한것은 아니다.
 * */
function print({ a, b }) {
    console.log(a);
    console.log(b);
}
print(object)

/* 기존 배열 값 해체 [ES6 이전] */
/*const animalList = ['cat', 'dog', 'tiger'];

const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];*/

/* 비구조화 할당 방식으로 변환 [변수명1, 변수명2, 변수명3] = [값1, 값2, 값3] */
const [cat, dog, tiger] = ['cat', 'dog', 'tiger'];
console.log(cat);
console.log(dog);
console.log(tiger);


/* Spread Operator => 펼침 연산자 */
let obj = {
    a:10,
    b:20
}
/* obj 객체를 newObj 복사 */
let newObj = {...obj};

let arr = [1,2,3];
/* 배열을 복사 */
let newArr = [...arr];

