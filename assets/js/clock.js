const anaSecond = document.querySelector("[data-second-hand");
const anaMinute = document.querySelector("[data-minute-hand");
const anaHour = document.querySelector("[data-hour-hand");

function setClock(){
    const currentDate = new Date();
    const theSecond = currentDate.getSeconds();
    const theMinute = currentDate.getMinutes();
    const theHour = currentDate.getHours();


    const secondRatio = theSecond/60;
    const minuteRatio = (secondRatio + theMinute)/60;
    const hourRatio = (minuteRatio + theHour)/12;


    setRatio(anaSecond,secondRatio);
    setRatio(anaMinute,minuteRatio);
    setRatio(anaHour,hourRatio);

}

function setRatio(elem,rotationRatio){
    elem.style.setProperty("--rotation",rotationRatio * 360);
}

setInterval(setClock,1000);
