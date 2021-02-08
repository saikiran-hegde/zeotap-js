import html from './view.html';
import './view.css';

let body;

export function show() {
  // append elemnts to the body
  body = document.getElementsByTagName('body')[0];
  body.innerHTML = html;
  const submitBtn = document.getElementsByTagName('button')[0];
  submitBtn.addEventListener('click', submitForm);
}

function submitForm() {
  const form = document.getElementById('zeo-form');
  for (let i = 0; i < form.length; i++) {
    console.log(form.elements[i].value);
  }
}