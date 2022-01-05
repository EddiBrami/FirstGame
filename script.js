document.getElementById("points").addEventListener("mouseover", sumarPuntos);

dots = 0;
function sumarPuntos() {
   dots++;
   document.getElementById("points").innerHTML = dots;
}