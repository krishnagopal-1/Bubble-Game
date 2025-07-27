let time = 60;
let score = 0;
let targetRandomNumber;

function getNewTarget() {
    targetRandomNumber = Math.floor(Math.random() * 10);

    document.querySelector("#targetValue").textContent = targetRandomNumber;
}

function makeBubble() {
    let clutter = "";

    for (let i = 0; i < 84; i++) {
        let randomNumber = Math.floor(Math.random() * 10);

        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector("#panel-bottom").innerHTML = clutter;
}

function countdown() {
    let counter = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            document.querySelector("#panel-bottom").innerHTML = `<h1>Score:${score}</h1> <h1>---Game Over---</h1> <h5>Click anywhere to play again!</h5>`;

            document.querySelector("#main").addEventListener("click", function () {
                location.reload();
            })

            clearInterval(counter);
        }
    }, 1000);
}

function increaseScore() {
    score++;
    document.querySelector("#scoreValue").textContent = score;
}

makeBubble();
countdown();
getNewTarget();

document.querySelector("#panel-bottom").addEventListener("click", function (a) {
    let clickedNum = Number(a.target.textContent);

    if (targetRandomNumber === clickedNum) {
        increaseScore();
        makeBubble();
        getNewTarget();
    } else {
        makeBubble();
    }

})