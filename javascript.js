setInterval(getTime, 1000);

const hour = document.querySelector(".hr-hand");
const minute = document.querySelector(".mn-hand");
const second = document.querySelector(".sc-hand");

function getTime(){

    const day = new Date();
    const sec = day.getSeconds() / 60;
    const min = (sec + day.getMinutes()) / 60;
    const hr = (min + day.getHours()) / 12;
    hour.style.transform = "rotate(" + (hr * 360) + "deg)"
    minute.style.transform = "rotate(" + (min * 360) + "deg)"
    second.style.transform = "rotate(" + (sec * 360) + "deg)"
    
}

