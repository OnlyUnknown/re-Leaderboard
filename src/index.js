import './style.css';
import { submit, get } from './modules/getAndAdd.js';

const submitForm = document.querySelector('.submit');

submitForm.addEventListener('submit', (e) => {
  const scoreVal = document.querySelector('.score');
  const nameVal = document.querySelector('.name');
  submit(nameVal.value, scoreVal.value);
  submitForm.reset()
  e.preventDefault();
});

const refresh = document.querySelector('.re-button');

refresh.addEventListener('click', get);

get();
