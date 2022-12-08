let scoreHome = 0
document.getElementById("score-home").textContent = scoreHome;


function addOneHome() {
    document.getElementById("score-home").textContent = scoreHome += 1;
} 
function addTwoHome() {
    document.getElementById("score-home").textContent = scoreHome += 2;
} 
function addThreeHome() {
    document.getElementById("score-home").textContent = scoreHome += 3;
} 



let scoreGuest = 0
document.getElementById("score-guest").textContent = scoreGuest;


function addOne() {
    document.getElementById("score-guest").textContent = scoreGuest += 1;
} 
function addTwo() {
    document.getElementById("score-guest").textContent = scoreGuest += 2;
} 
function addThree() {
    document.getElementById("score-guest").textContent = scoreGuest += 3;
} 