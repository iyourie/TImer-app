let one = document.querySelectorAll('p')[0]
let two = document.querySelectorAll('p')[1]
let three = document.querySelectorAll('p')[2]
let four = document.querySelectorAll('p')[3]

let counter = setInterval(() => {

    let goal = new Date('May 30, 2022 23:59:59').getTime()

    let now = new Date().getTime()

    let timer = goal - now


    let days = Math.floor(timer / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timer % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(timer % (1000 * 60 * 60) / 1000 / 60);
    let seconds = Math.floor(timer % (1000 * 60) / 1000);

    one.textContent = seconds < 10 ? `0${seconds}` : seconds;
    two.textContent = minutes < 10 ? `0${minutes}` : minutes;
    three.textContent = hours < 10 ? `0${hours}` : hours;
    four.textContent = days < 10 ? `0${days}` : days;
}, 1000);


