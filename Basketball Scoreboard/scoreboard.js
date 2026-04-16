let homeScore = document.getElementById("scores-home");
let guestScore = document.getElementById("scores-guest");

let defaultScoreHome = 0;
let defaultScoreGuest = 0;

function add1ScoreHome() {
    homeScore.textContent = defaultScoreHome += 1;
}

function add2ScoreHome() {
    homeScore.textContent = defaultScoreHome += 2;
}

function add3ScoreHome() {
    homeScore.textContent = defaultScoreHome += 3;
}

function add1ScoreGuest() {
    guestScore.textContent = defaultScoreGuest += 1;
}

function add2ScoreGuest() {
    guestScore.textContent = defaultScoreGuest += 2;
}

function add3ScoreGuest() {
    guestScore.textContent = defaultScoreGuest += 3;
}