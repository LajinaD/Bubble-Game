
var timer = 60;
var score = 0;
var hitrn;
var interval;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 147; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
   
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(interval);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over!</h1>`;
            document.querySelector("#hit").textContent = "-"
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else{
        clearInterval(interval);
        document.querySelector("#pbottom").innerHTML = `<h1>Wrong Hit!</h1>`;
    }
})


document.querySelector("#startbtn").addEventListener("click",function(){
    document.querySelector("#startbtn").style.display = "none";
    runTimer();
    makeBubble();
    getNewHit();
})