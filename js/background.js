'use strict';

const img = ['1.jpg','3.jpg','7.jpg','8.jpg','11.jpg'];
const random_img = img[Math.floor(Math.random() * img.length)];
const back_img = document.createElement('img');
back_img.setAttribute('src', `./img/${random_img}`);

document.body.appendChild(back_img);