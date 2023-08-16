const scoreA = document.querySelector('#scoreA')
const scoreB = document.querySelector('#scoreB')

const buttonA = document.querySelector('#upA')
const buttonB = document.querySelector('#upB')
const reset = document.querySelector('#reset')
const playToSelect = document.querySelector('#playTo');


let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winScore = 2;

function gameEnd() {

    if (p1Score === winScore) {
        scoreA.style.color = 'green';
        scoreB.style.color = 'red';
        buttonA.disabled = true;
        buttonB.disabled = true;
    }
    if (p2Score === winScore) {
        scoreA.style.color = 'red';
        scoreB.style.color = 'green';
        buttonA.disabled = true;
        buttonB.disabled = true;
    }


}



buttonA.addEventListener('click', function (e) {

    if (gameOver !== true) {
        console.log('button A')

        p1Score++

        if (p1Score === winScore) {

            gameOver = true;

        }

        scoreA.innerHTML = p1Score
    }

    gameEnd()

})
buttonB.addEventListener('click', function (e) {
    if (gameOver !== true) {
        console.log('button B')

        p2Score++

        if (p2Score === winScore) {

            gameOver = true;

        }

        scoreB.innerHTML = p2Score
    }

    gameEnd()

})

playToSelect.addEventListener('change', function(){

    winScore = parseInt(this.value);
    startOver();
    

})

reset.addEventListener('click', startOver)

function startOver() {
    p1Score = 0
    p2Score = 0
    scoreA.innerHTML = p1Score
    scoreB.innerHTML = p2Score
    scoreA.style.color = 'black';
    scoreB.style.color = 'black';
    gameOver = false;
    buttonA.disabled = false;
    buttonB.disabled = false;

}