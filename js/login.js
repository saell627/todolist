'use strict';

const login = document.querySelector('.login');
const input_login = document.querySelector('.input_login');
const print_userName = document.querySelector('.print_userName');
const USERNAME_KEY = 'userName';

function paint_userName(userName){
    login.classList.add('hidden');
    print_userName.classList.remove('hidden');
    print_userName.innerHTML = `Hello, ${userName}!`;
    input_todo.focus();
}

function fnlogin(event){
    event.preventDefault();
    const userName = input_login.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paint_userName(userName);
}

//main
const saved_userName = localStorage.getItem(USERNAME_KEY);
if(saved_userName){
    paint_userName(saved_userName);
}
input_login.focus();
login.addEventListener('submit', fnlogin);