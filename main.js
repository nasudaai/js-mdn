const para = document.querySelector('p')
console.log(para)



para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Hey name!');
  para.textContent = `Player 1: ${name}`
}


document.addEventListener('DOMContentLoaded', () => {
  function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'push Button';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
});
