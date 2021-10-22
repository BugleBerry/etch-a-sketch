const body = document.querySelector('body');
const container = document.querySelector('.container');
body.appendChild(container);
container.style.display = ('flex');
container.style.backgroundColor = ('black');
container.style.flexDirection =  ('column');
container.style.height = ('500px');
container.style.width = ('500px');
container.style.border = ('thick solid black');
container.style.gap = ('1px');

createBoard(16);

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
body.appendChild(resetBtn);
resetBtn.addEventListener('click', () => {
  resetBoard();
});

function createBoard(size) {
  for (let i = 0; i < size; i++) {
    const row_i = document.createElement('div');
    row_i.classList.add('row');
    container.appendChild(row_i);
    row_i.style.display = ('flex');
    row_i.style.height = ('30px');
    row_i.style.flex = ('1 1 auto');
    row_i.style.gap = ('1px');
    for (let j = 0; j < size; j++) {
      const col_j = document.createElement('div');
      col_j.classList.add('col');
      col_j.style.backgroundColor = ('white');
      row_i.appendChild(col_j);
      col_j.style.display = ('flex');
      col_j.style.width = ('30px');
      col_j.style.flex = ('1 1 auto');
    }
  }
  const boxes = document.querySelectorAll('.col');
  boxes.forEach((col) => {
    col.addEventListener('mouseover', (e) => {
      event.target.style.backgroundColor = ('black');
    });
  });
}

function resetBoard() {
  let num = prompt('What resolution would you like? (up to 100)');
  if (num < 0 || num > 100 || typeof num === "NaN") {
    alert ("Please enter a valid number");
  } else {
    const rows = document.querySelectorAll('.row');
    rows.forEach(e => e.remove());
    createBoard(num);
  }
}