const para = document.querySelector('p')
console.log(para)



para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Hey name!');
  para.textContent = `Player 1: ${name}`
}
