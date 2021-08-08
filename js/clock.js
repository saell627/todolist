'use strict';

const clock = document.querySelector('.clock');
const date = document.querySelector('.date');
const weekly = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function print_date(){
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const week = weekly[today.getDay()];

    date.innerHTML = `${year} . ${month+1} . ${day} ${week}`;
}
function print_time(){
    const today = new Date();

    const hour = String(today.getHours()).padStart(2,'0');
    const minute = String(today.getMinutes()).padStart(2,'0');
    const second = String(today.getSeconds()).padStart(2,'0');

    clock.innerHTML = `${hour} : ${minute} : ${second}`;
}

//main
print_time();
setInterval(print_time, 1000);
print_date();