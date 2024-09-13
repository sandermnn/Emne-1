let poeng = 0;

function resetFunksjon() {
    let tall1 = Math.floor(Math.random() * 10) + 1;
    let tall2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById('teller1').innerHTML = tall1;
    document.getElementById('teller2').innerHTML = tall2;
}


function sumbitFunksjon() {
    let userInput = document.getElementById('operatorInput').value;
    let tall1 = Number(document.getElementById('teller1').innerHTML);
    let tall2 = Number(document.getElementById('teller2').innerHTML);

    if (userInput === "<") {

        if (tall1 < tall2) {
            oppdaterPoeng(1);
        } else {
            oppdaterPoeng(-1);
        }

    } else if (userInput === ">") {
        if (tall1 > tall2) {
            oppdaterPoeng(1);
        } else {
            oppdaterPoeng(-1);
        }
    } else if (userInput === "=") {
        if (tall1 === tall2) {
            oppdaterPoeng(1);
        } else {
            oppdaterPoeng(-1);
        }

    } else {
        console.log("Ugyldig")

    }
}

function oppdaterPoeng(endring) {
    poeng += endring;
    document.getElementById('poengTeller').innerHTML = "Poeng:" + poeng;
}


