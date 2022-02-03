setInterval (setClock, 1000);

const second = document.querySelector('[data-second-hand]');
const minute = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock(params) {
    const date = new Date();
    const sec = date.getSeconds()/60;
    const min = ( sec + date.getMinutes()) / 60;
    const hour = (min + date.getHours()) / 12;
    setRotation(second, sec);
    setRotation(minute, min);
    setRotation(hourHand, hour);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio *360 )
}