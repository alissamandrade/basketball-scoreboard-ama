let homeScoreTotal = 0
let guestScoreTotal = 0

let homeScoreTotalEl = document.getElementById("home-score-total")
let guestScoreTotalEl = document.getElementById("guest-score-total")

// Home Score Total btns

function homeAdd1() {
 homeScoreTotal = homeScoreTotal + 1
 homeScoreTotalEl.textContent = homeScoreTotal
}


function homeAdd2() {
    homeScoreTotal = homeScoreTotal + 2
    homeScoreTotalEl.textContent = homeScoreTotal
}

function homeAdd3() {
    homeScoreTotal = homeScoreTotal + 3
    homeScoreTotalEl.textContent = homeScoreTotal
}


// Guest Score Total btns

function guestAdd1() {
    guestScoreTotal = guestScoreTotal + 1
    guestScoreTotalEl.textContent = guestScoreTotal
}

function guestAdd2() {
    guestScoreTotal = guestScoreTotal + 2
    guestScoreTotalEl.textContent = guestScoreTotal
}

function guestAdd3() {
    guestScoreTotal = guestScoreTotal + 3
    guestScoreTotalEl.textContent = guestScoreTotal

}

