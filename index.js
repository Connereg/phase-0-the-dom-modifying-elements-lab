// Write your code here!
const mainGot = document.getElementById('main');
mainGot.remove();

const createVictory = document.createElement('h1');
document.body.appendChild(createVictory);
createVictory.className = "victoryClass";
createVictory.id = "victory";

const newHeader = document.getElementById("victory");
newHeader.innerHTML = "<h1>Conner is the champion</h1>";
