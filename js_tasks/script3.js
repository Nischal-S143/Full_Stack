let s = 0; 
let h = document.querySelectorAll('.hole'); 
let sc = document.getElementById('score'); 
h.forEach(hole => {
    hole.onclick = function() {
        if (hole.classList.contains('mole')) {
            s++;
            sc.innerText = s;
        }
    }
            hole.classList.remove('mole'); 
});

setInterval(() => {
    h.forEach(hole => hole.classList.remove('mole'));
    let rn = Math.floor(Math.random() * 9);
    h[rn].classList.add('mole');
}, 1000);