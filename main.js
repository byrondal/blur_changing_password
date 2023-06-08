

const passwordInput = document.getElementById('password-input');
const body = document.body;

passwordInput.addEventListener('input', () => {
  const passwordLength = passwordInput.value.length;
  const blurValue = passwordLength * 2;

  body.style.filter = `blur(${blurValue}px)`;
});




