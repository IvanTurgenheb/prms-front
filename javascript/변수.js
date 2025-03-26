var 바 = 1; // 코드 평가 단계: 선언과 동시에 초기화 (바 = undefined), 코드 실행 단계: 값 할당

let 렛 = 2; // 재할당 가능
const 콘스트 = 3; // 재할당 불가
// 코드 평가 단계: 선언만 함, 초기화 단계: undefined 할당, 코드 실행 단계: 값 할당

console.log(a); // undefined
try {
  console.log(b); // 에러 발생
  console.log(c); // 에러 발생
} catch (error) {}

var a = 1;
const b = 2;
let c;
