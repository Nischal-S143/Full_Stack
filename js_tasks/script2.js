// op = options array
let op = ['R', 'P', 'S']; 
function go(uc) {
    let rn = Math.floor(Math.random() * 3); 
    let cc = op[rn]; 
    let pt = document.getElementById("rt"); 
    let tx = "You: " + uc + " | Bot: " + cc + " -> ";
    if (uc == cc) {
        pt.innerHTML = tx + "tiee ho gaya vaii";
        pt.style.color = "orange";
    } 
    else if ((uc == 'R' && cc == 'S') || (uc == 'P' && cc == 'R') || (uc == 'S' && cc == 'P')) {
        pt.innerHTML = tx + "yayyyyy win ho gaya";
        pt.style.color = "green";
    } 
    else {
        pt.innerHTML = tx + "khatam";
        pt.style.color = "red";
    }
}