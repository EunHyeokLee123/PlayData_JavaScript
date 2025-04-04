// * (전체)로 불러오면 항상 별칭을 붙여야함.
// import * as vendor from './vendor.js';

import {$userInput,
$addBtn,
$subtractBtn,
$multiplyBtn,
$divideBtn,
$currentResultOutput,
$currentCalculationOutput,
$logEntries,
currentResult, logArray, seq} from './vendor.js';

// type에 +,-,/,X 연산기호가 문자열이 매개변수로
const calculate = (type) =>{
    // 입력창에 입력된 숫자를 불러옴.
    const enteredNumber = + $userInput.value; // 문자열로 읽혀서 +붙혀서 정수로 변환
    if(enteredNumber || enteredNumber === 0){
        alert('연산 불가!');
        return;
    }
    // type에 들어있는 기호에 따라 연산을 진행
    switch(type){
        case '+' : 
    }

    // 연산의 결과를 두번째 section에 렌더링.


    // 다음 연산을 위해 입력창을 비워주면 좋겠다.
};

document.getElementById('calc-actions').addEventListener('click', (e)=>{
    if(!e.target.matches('button')) return;
    
    calculate(e.target.textContent);
    
});


/*
이벤트 핸들러 등록 자리에 함수 호출문을 써버리면 함수의
호출 결과를 이벤트로 등록하는 걸로 인식함.
이벤트와 상관없이 무조건 호출이 됨.
따라서 이벤트 핸들러 자리에 함수 호출문을 작성하는 것은 지양해야 함.
$addBtn.addEventListener('click', calculate('ADD'));
$subtractBtn.addEventListener('click', calculate('SUB'));
$multiplyBtn.addEventListener('click', calculate('MULTI'));
$divideBtn.addEventListener('click', calculate('DIVIDE'));
*/


