let hour = document.getElementById("h");
let minute = document.getElementById("m");
let second = document.getElementById("s");

function displayTime(){
    let date = new Date();
    let h=date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();

    let hRotation= 30*h + m/2;
    let mRotation = m*6;
    let sRotation = s*6;

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTime,1000);