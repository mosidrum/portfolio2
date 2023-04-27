/* eslint-disable no-unused-vars */
const form = document.getElementById('form');

form.addEventListener('input', () => {
  const saveFormData = {
    fullname: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('textarea').value,
  };
  localStorage.setItem('saveFormData', JSON.stringify(saveFormData));
});

const parseFormData = JSON.parse(localStorage.getItem('saveFormData'));

if (parseFormData) {
  const fullname = document.getElementById('name');
  fullname.value = parseFormData.fullname;
  const email = document.getElementById('email');
  email.value = parseFormData.email;
  const message = document.getElementById('textarea');
  message.value = parseFormData.message;
}