// app.js
// default로 export한 데이터는 import하는 측에서 이름을 새로 지어서 받을 수 있음.
// import하는 데이터에 as를 붙여서 별칭을 붙여서 사용할 수 있음.
import getDOM from './getDOM.js';
import clickFunc from './event.js';
import calcFunc from './operate.js';

// default가 아닌 데이터를 import할때는
// {}를 사용하여 import해야함.
// 단, 쓰고 싶은 데이터만 골라서 import가능

const {$btn, $pText} = getDOM;
// default로 export된 데이터 -> 객체 형태
// 일단 변수로 import하고, 디스트럭쳐링을 통해 각각의
const {pow, add} = calcFunc;

$btn.addEventListener('click', clickFunc);

