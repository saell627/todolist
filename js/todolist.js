'use strict';

const input_todo = document.querySelector('.input_todo');
const todo_form = document.querySelector('.todo_form');
const todos = document.querySelector('.todos');
const dones = document.querySelector('.dones');

let todoArr = [];

const TODO_VALUE_KEY = 'todo_value';

function checked_todo(event){
    const checked_span = event.target.parentElement;
    const checked_target = checked_span.parentElement;
    let classes = checked_target.classList;
    classes.toggle('checked_todo');
}

function delete_todo(event){
    const delete_span = event.target.parentElement;
    const  delete_target = delete_span.parentElement;
    delete_target.remove();
    todoArr = todoArr.filter((item)=>{
        return item.id !== parseInt(delete_target.id);
    });
    save_todo();
    input_todo.focus();
}

function save_todo(){
    localStorage.setItem(TODO_VALUE_KEY, JSON.stringify(todoArr));
}

function create_todo(todo_obj){
    const todo = document.createElement('li');
    // todo.classList.add('todo');
    todo.id = todo_obj.id;

    const span = document.createElement('span');
    span.classList.add('todo_value');
    span.innerHTML = `◽ ${todo_obj.text}`;

    const buttons = document.createElement('span');

    const delete_button = document.createElement('button');
    delete_button.innerText = "❌";
    delete_button.addEventListener('click', delete_todo);

    const checked_button = document.createElement('button');
    checked_button.innerText = "✔️";
    checked_button.addEventListener('click', checked_todo);

    todo.appendChild(span);
    buttons.appendChild(delete_button);
    buttons.appendChild(checked_button);
    todo.appendChild(buttons);
    todos.appendChild(todo);

    todo.scrollIntoView();
}

function handle_todo(event){
    event.preventDefault();
    const todo_value = input_todo.value;
    input_todo.value = '';
    const todo_obj = {
        text: todo_value,
        id: Date.now(),
    }
    todoArr.push(todo_obj);
    create_todo(todo_obj);
    save_todo();
    input_todo.focus(); 
}

//main
const saved_todo = localStorage.getItem(TODO_VALUE_KEY);

if(saved_todo !== null){
    const arr_saved_todo = JSON.parse(saved_todo);
    todoArr = arr_saved_todo;
    todoArr.forEach(create_todo);
}
input_todo.focus();
todo_form.addEventListener('submit', handle_todo);