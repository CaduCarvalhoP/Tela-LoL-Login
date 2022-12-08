const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')
const handlefocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handlefocusout = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handlechange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input)=>{input.addEventListener('focus', handlefocus)})
inputs.forEach((input)=>{input.addEventListener('focusout', handlefocusout)})
inputs.forEach((input)=>{input.addEventListener('input', handlechange)})