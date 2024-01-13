let mouse = document.getElementById('mouse');
let qr = document.getElementById('hck');
let box = qr.getBoundingClientRect();

var posiscionx = `${box.x}px`;
var posisciony = `${box.y}px`;

mouse.style.top = "50px";
mouse.style.left = posisciony;
/*
function posicion() {

    let qr = document.getElementById('hck');
    let box = qr.getBoundingClientRect();

}
    window.onresize = posicion;
    */