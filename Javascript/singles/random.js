let hands = ["rock", "paper", "scissor"]

function randomItem(){
    let num = Math.floor(Math.random()*3); 
    return hands[num]
}

console.log( randomItem() )