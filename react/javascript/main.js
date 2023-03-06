/*JS 코드가 HTML 코드보다 먼저 실행되어 해당 요소가 로드되지 않은 상태에서 실행되는 경우 window.onload()*/
window.onload = () => {
    const number = document.getElementById('number');
    const increase = document.querySelector('#increase');
    const decrease = document.querySelector('#decrease');

    /*DOM 이벤트 설정 시 on`이벤트이름` 값에 함수를 설정하면 됩니다.*/

    increase.onclick = () => {
        const current = parseInt(number.innerText, 10);
        number.innerText = current + 1;
    };

    decrease.onclick = () => {
        const current = parseInt(number.innerText, 10);
        number.innerText = current - 1;
    };
}
