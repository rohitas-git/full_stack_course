let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let idOne = Math.floor( Math.random()*fighters.length);
    let idTwo = Math.floor( Math.random()*fighters.length);
    let str = `${fighters[idOne]} VS ${fighters[idTwo]}`;
    stageEl.textContent = str;
})
