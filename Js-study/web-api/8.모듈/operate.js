
// 선언과 동시에 내보내기
const pow = (n) => n ** 2;
const add = (n1, n2) => n1 + n2;

// 하나로 묶어서 객체로 보내려면
// default로 보내야 함.

// 내보낼 데이터가 객체 형태 일때는 프로퍼티 이름을 따로 세팅 후
// import 하는 쪽에서 디스트럭쳐링을 통해 변수에 할당할 수 있음.

export default {pow: pow, add: add };