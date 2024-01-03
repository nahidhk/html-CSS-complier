
console.log('Hello World!');
var codu = document.getElementById("dataBox");

function coder(){
var codx = codu.value;
  codu.style=`color:lime; background-color: black;`
  localStorage.setItem("code",codx);
  
}
var codapi = localStorage.getItem("code");

codu.value=codapi;


function run(){
 window.location.href="run";
}
