const counter = document.querySelector('.count');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');


let count = 0;

 
function updateCounter() {
    counter.textContent = count;
}


plus.addEventListener('click', function() {
    count++; 
    updateCounter(); 
});


minus.addEventListener('click', function() {
    count--;
    updateCounter(); 
});

reset.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

