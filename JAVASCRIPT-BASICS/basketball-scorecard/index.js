let homescore = 0
let guestscore = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
function homeplusone(){
    homescore+=1
    homeScore.textContent= homescore
}
function homeplustwo(){
    homescore+=2
    homeScore.textContent= homescore
}
function homeplusthree(){
    homescore+=3
    homeScore.textContent= homescore
}
function reset(){
    homescore=0
    guestscore=0
    homeScore.textContent = 0
    guestScore.textContent = 0
}
function guestplusone(){
    guestscore+=1
    guestScore.textContent= guestscore
}
function guestplustwo(){
    guestscore+=2
    guestScore.textContent= guestscore
}
function guestplusthree(){
    guestscore+=3
    guestScore.textContent= guestscore
}
