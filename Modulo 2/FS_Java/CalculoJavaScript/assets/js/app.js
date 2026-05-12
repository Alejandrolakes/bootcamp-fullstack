let diametro = prompt("Ingrese el diametro");
let radio = diametro/2;
let area = Math.PI * Math.pow(radio, 2);

console.log(area);
alert(area);
document.getElementById("resultado").innerHTML = area;
