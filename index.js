
//let totalvalue = 0;
function HamburgerKatt(){
    let value = parseInt(document.getElementById('totalvalue').textContent);
    value += 250;
    document.getElementById('totalvalue').textContent = value;
}
function KebabKatt(){
    let value = parseInt(document.getElementById('totalvalue').textContent);
    value += 200;
    document.getElementById('totalvalue').textContent = value;
}
function BuriKatt(){
    let value = parseInt(document.getElementById('totalvalue').textContent);
    value += 100;
    document.getElementById('totalvalue').textContent = value;
}
function Reset(){
    totalvalue = 0;
}
function init(){
    document.getElementById("hambi").addEventListener("click", HamburgerKatt);
    document.getElementById("kebab").addEventListener("click", KebabKatt);
    document.getElementById("buri").addEventListener("click", BuriKatt);
    document.getElementById("reset").addEventListener("click", Reset);
}