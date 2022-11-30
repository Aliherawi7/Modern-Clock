const hour = document.querySelector(".arrows .hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
    let newDate = new Date();

    const getHour = newDate.getHours();
    const getMinute = newDate.getMinutes();
    const getSecond = newDate.getSeconds();

    const hourDeg = (getHour / 12) * 360;
    const minuteDeg = (getMinute / 60) * 360;
    const secondDeg = (getSecond / 60) * 360;

    console.log(hourDeg)
    console.log(minuteDeg)
    console.log(secondDeg)


    hour.style.transform = `rotate(${hourDeg}deg)`
    minute.style.transform = `rotate(${minuteDeg}deg)`
    second.style.transform = `rotate(${secondDeg}deg)`

}

setInterval(setDate, 1000);