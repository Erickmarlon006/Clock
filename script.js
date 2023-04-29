const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time(){
    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();
    
    hr = hr.toString().padStart(2,"0");
    min = min.toString().padStart(2,"0");
    sec = sec.toString().padStart(2,"0");

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = sec

},1000);