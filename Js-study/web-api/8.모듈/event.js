import getDOM from './getDOM.js';

// 이벤트 핸들러 함수

const {$btn, $pText} = getDOM;

const clickHandler = (e) =>{
    alert('버튼이 클릭됨~~');
    $pText.textContent = '모듈 사용법을 익히는 중';
};

// 내보낼 데이터가 1개이면 default를 쓸 수 있음.
export default clickHandler;