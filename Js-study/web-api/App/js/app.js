// * (전체)로 불러오면 항상 별칭을 붙여야함.
// import * as vendor from './vendor.js';

import {$userInput,
$addBtn,
$subtractBtn,
$multiplyBtn,
$divideBtn,
$currentResultOutput,
$currentCalculationOutput,
$logEntries, logArray} from './vendor.js';

// 외부 모듈에서 import하는 변수는 let이여도, const로 import된다.

let currentResult = 0;
let seq = 0;

// type에 +, -, /, X 연산기호가 문자열이 매개변수로
const calculate = (type) => {
    // 입력창에 입력된 숫자를 불러옴.
    const enteredNumber = +$userInput.value; // 문자열로 읽혀서 +붙혀서 정수로 변환
    if(enteredNumber === 0){
        alert('연산 불가!');
        return;
    }

    // 지금까지의 연산결과를 임시로 저장장
    const tempResult = currentResult;

    // type에 들어있는 기호에 따라 연산을 진행

    switch(type){
        case '+' : currentResult += enteredNumber;
                    break;
        case '-' : currentResult -= enteredNumber;
                    break;
        case '/' :  currentResult /= enteredNumber;
                    break;
        case 'x' : currentResult *= enteredNumber;
                    break;
        default : alert('잘못된 기호임.');
    }

    currentResult = Math.round(currentResult*100)/100;

    // 연산의 결과를 두번째 section에 렌더링.
    $currentCalculationOutput.textContent = `${tempResult} ${type} ${enteredNumber}`;
    $currentResultOutput.textContent = currentResult;

    // 다음 연산을 위해 입력창을 비워주면 좋겠다.
    $userInput.value = '';
    // 입력창으로 커서를 이동
    $userInput.focus();  

    // 화면에 로그를 li로 표현하는 함수
    writeToLog(type, tempResult, enteredNumber);
};

// 로그 이력을 만드는 함수
const writeToLog = (type, tempResult, enteredNumber) => {
    // 계산 결과를 객체로 포장해서 배열에 저장
    const logObject = {
        mark: type,
        // 프로퍼티명과 변수명이 같으면 기재하지 않아도 됨.
        // 키값과 변수명이 같으면 그냥 변수만 적어도 변수명: 변수데이터 로 인식함.
        originalResult: tempResult,
        enteredNumber,
        currentResult
    };
    // 로그를 모아놓는 배열에 객체를 추가
    // 화면에 렌더링하는 것과 별개로, 연산에 사용했던 값을 따로 보관해서
    // 추후에 필요한 경우 배열에서 가져올 용도로 사용
    logArray.push(logObject);
    console.log(logArray);
    
    // 화면에 로그를 li로 렌더링하는 함수 호출
    renderToLog(logObject);
};

// 함수의 매개변수 자리에 바로 디스트럭쳐링을 하고, 프러퍼티 키 이름도 변경 가능함.
const renderToLog = ({mark, originalResult: prevResult, 
    enteredNumber: number, currentResult: result}) => {
        const $newLi = document.createElement('li');
        $newLi.textContent = `${++seq}. ${prevResult} ${mark} ${number} = ${result}`;
        $newLi.classList.add('log-entries-item');

        $logEntries.appendChild($newLi);
};


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


document.getElementById('calc-actions').addEventListener('click', (e)=>{
    if(!e.target.matches('button')) return;
    calculate(e.target.textContent);
    
});






