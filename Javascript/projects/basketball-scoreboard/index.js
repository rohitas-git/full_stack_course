// functionality to buttons
// new game button


let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeTitleEl = document.getElementById("home-title");
let guestTitleEl = document.getElementById("guest-title");

let incrementBtns = document.querySelectorAll(".increment-btn");

function incrementHomeBy3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightLeadingScore();
}

function incrementHomeBy2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightLeadingScore();
}

function incrementHomeBy1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightLeadingScore();
}

function incrementGuestBy3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightLeadingScore();
}

function incrementGuestBy2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightLeadingScore();
}

function incrementGuestBy1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightLeadingScore();
}

function newGame() {
    incrementBtns.forEach(btn => btn.disabled = false);
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    homeScoreEl.classList.remove("highlight");
    guestScoreEl.classList.remove("highlight");
    homeTitleEl.classList.remove("highlight");
    guestTitleEl.classList.remove("highlight");
}

/**
 * Ends the game and triggers confetti animations for the winning team.
 * Home win triggers confetti from the left, Guest win from the right.
 * Ties result in no confetti.
 * Args: None
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function endGame() {
    if (homeScore === guestScore) return;

    const jsConfetti = new JSConfetti();
    const isHomeWinner = homeScore > guestScore;

    jsConfetti.addConfetti({
        emojis: isHomeWinner ? ['❤️'] : ['☠️'],
        confettiRadius: 1,
        confettiNumber: 10,
    });

    // disable increment buttons
    incrementBtns.forEach(btn => btn.disabled = true);
}

function highlightLeadingScore() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight");
        homeTitleEl.classList.add("highlight");
        guestScoreEl.classList.remove("highlight");
        guestTitleEl.classList.remove("highlight");
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("highlight");
        guestTitleEl.classList.add("highlight");
        homeScoreEl.classList.remove("highlight");
        homeTitleEl.classList.remove("highlight");
    } else {
        homeScoreEl.classList.remove("highlight");
        homeTitleEl.classList.remove("highlight");
        guestScoreEl.classList.remove("highlight");
        guestTitleEl.classList.remove("highlight");
    }
}