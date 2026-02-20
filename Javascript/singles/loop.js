
// NORMAL FOR LOOP -----------------------------------------------
// When to use: When you need to perform an action a specific number of times.
//    START           FINISH       STEP SIZE
for (let count = 10; count < 21; count += 1) {
  console.log(count);
}

// ARRAY FOR LOOP ------------------------------------------------
// When to use: When you want to perform an action for each element in an array.
let cards1 = [7, 3, 9]
for (let i = 0; i < cards1.length; i++) {
  console.log(cards1[i]);
}

// FOR OF LOOP ------------------------------------------------
// When to use: When you want to iterate over the elements of an array.
let cards2 = [7, 3, 9]
for (let card of cards2) {
  console.log(card);
}

// FOR EACH LOOP ------------------------------------------------
// When to use: When you want to perform an action for each element in an array.
// When not to use: When you want to create a new array based on the elements of an existing array.
let cards3 = [7, 3, 9]
cards3.forEach(function (card) {
  console.log(card);
})
