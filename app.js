//soda, cheese, grapes, bread, watermelon

const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');


soda.addEventListener('click', () => {
    soda.classList.add('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.add('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.add('picked');
});

bread.addEventListener('click', () => {
    bread.classList.add('picked');
});

watermelon.addEventListener('click', () => {
    watermelon.classList.add('picked');
});
