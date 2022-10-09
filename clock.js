const day = document.querySelector("div #date");
const time = document.querySelector("div #time");

function getClock(){
    const date = new Date();
    const years = String(date.getFullYear()).padStart(2,"0");
    const months = String((date.getMonth()+1)).padStart(2,"0");
    const days = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    day.innerText = `${years}년 ${months}월 ${days}일`;
    time.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
setInterval(getClock, 1000);