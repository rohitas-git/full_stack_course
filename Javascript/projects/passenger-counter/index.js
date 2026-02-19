let count = Number(document.getElementById("count").innerText);
let saveEl = document.getElementById("save-el");
console.log(count);
    
function increment() {
    count += 1;
    console.log(count);
    document.getElementById("count").innerText = `${count}`;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
}