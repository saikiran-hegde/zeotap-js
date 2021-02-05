import html from './view.html';
import './view.css';

let elements = [];
let body;

export function show(text) {
  let temp = document.createElement('div');
  temp.innerHTML = html;
  temp.getElementsByClassName('zeo-js-dialog')[0].textContent = text;

  // append elemnts to the body
  body = document.getElementsByTagName('body')[0];
  while (temp.children.length > 0) {
    elements.push(temp.children[0]);
    body.appendChild(temp.children[0]);
  }

  body.addEventListener('click', close);
}

export function close() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
  body.removeEventListener('click', close);
}