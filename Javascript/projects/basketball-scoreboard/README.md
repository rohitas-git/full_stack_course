# 🏀 Basketball Scoreboard

**A dynamic, interactive scoreboard to track basketball games with style.**

**Live Demo:** [Click here to view](#) *(Replace with your deployment link if hosted, e.g., on Vercel/Netlify)*

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript.

**Status:** MVP Complete

---

## 🎯 The Problem & Solution

**The Problem:** keeping track of scores during a casual basketball game can be messy and prone to arguments. Pen and paper are slow, and remembering the score is unreliable.

**The Solution:** A digital, easy-to-use scoreboard that allows users to instantly update scores, see who is winning at a glance, and celebrate the victor with fun animations.

---

## ✨ Key Features

*   **Point Controls:** dedicated buttons to add +1, +2, or +3 points for Home and Guest teams.
*   **Leader Highlighting:** The scoreboard automatically highlights the text of the team currently in the lead, providing instant visual feedback.
*   **Game Management:** "New Game" button to reset scores instantly.
*   **Victory Celebration:** "End Game" button triggers a confetti explosion based on the winner (❤️ for Home, ☠️ for Guest).
*   **Responsive Design:** Clean interface using BEM (Block Element Modifier) methodology for CSS.

---

## 🛠 Technical Deep Dive

One interesting technical challenge was managing the visual state of the "leader" in real-time.

Instead of complex state management libraries, I implemented a lightweight logic function `highlightLeadingScore()` that runs on every score update. It compares the `homeScore` and `guestScore` variables and dynamically toggles the `.highlight` CSS class on the respective elements. This ensures the UI is always in sync with the internal state without needing a heavy framework.

```javascript
function highlightLeadingScore() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight");
        guestScoreEl.classList.remove("highlight");
        // ... updates titles as well
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("highlight");
        homeScoreEl.classList.remove("highlight");
        // ...
    } else {
        // Handle tie game
        homeScoreEl.classList.remove("highlight");
        guestScoreEl.classList.remove("highlight");
    }
}
```

---

## 🚀 Challenges & Learnings

**Challenge:** Implementing the "End Game" confetti without bloating the project with heavy libraries.

**Solution:** I integrated `js-confetti`, a lightweight library, via CDN. This allowed me to add a polished, fun feature with just a few lines of code.

**Learning:** I learned how to use external libraries in a simple HTML/JS project without a build step (like Webpack or Vite), identifying the trade-offs between CDN links and npm packages.

---

## 💻 Local Setup Instructions

1.  **Clone the repository** (or download usage files):
    ```bash
    git clone https://github.com/your-username/basketball-scoreboard.git
    cd basketball-scoreboard
    ```

2.  **Open the project:**
    Simply open the `index.html` file in your preferred web browser.

    *Alternative (for live reloading):*
    If you have VS Code with the "Live Server" extension, right-click `index.html` and select "Open with Live Server".

3.  **Enjoy!** Start clicking buttons to track the game.
