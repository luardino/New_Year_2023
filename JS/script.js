"use strict";

document.body.insertAdjacentHTML("beforeend","<div id='copa'></div>")
document.body.insertAdjacentHTML("beforeend","<div id='tronco'></div>")

const copa = document.getElementById("copa");
const tronco = document.getElementById("tronco");

const criarCopa = (tamanho) => {
   let aux = "";
   for (let cont=1;cont<=tamanho; cont++){
      aux += `${"*".repeat(cont*2-1)}<br>`;
   };

   return aux
}
const criarTronco = (tamanho) => {
   if (tamanho >=3){
      return ("*".repeat((tamanho-1)/2)+"<br>").repeat((tamanho)/3);
   }
   return "";
}
const criarArvore = (tamanho) => {
   copa.insertAdjacentHTML ("beforeend", criarCopa(tamanho));
   tronco.insertAdjacentHTML ("beforeend", criarTronco(tamanho));
   copa.style.textAlign =  "center";
   tronco.style.textAlign = "center";
}

criarArvore (prompt("Digite o tamanho da arvore!!!"));

setInterval(() => {
   if (copa.style.color == "red") {
      copa.style.color = "blue";
   } else if(copa.style.color == "blue") {
      copa.style.color = "green";
   } else {
      copa.style.color = "red";
   }

}, 1000);