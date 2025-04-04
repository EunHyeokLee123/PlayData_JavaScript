// DOM구조에서 요소를 취득하는 로직을 모아놓은 곳

const $btn = document.getElementById('btn');
const $pText = document.querySelector('.text');

// 다른 js파일에서 이 객체를 import(사용)할 수 있음
// 객체 형태로 내보냄
export default { $btn, $pText };