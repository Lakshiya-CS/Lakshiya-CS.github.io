let xTurn= true;
let gameOver = false;

function changeMark(buttonId) {
    let currentMark= document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML='X';
            document.getElementById(buttonId).style.color ='blue';
        }
        else {
            document.getElementById(buttonId).innerHTML= 'O';
            document.getElementById(buttonId).style.color = 'green';
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    document.getElementById("a1").innerHTML="";
    document.getElementById("b1").innerHTML="";
    document.getElementById("c1").innerHTML="";
    document.getElementById("a2").innerHTML="";
    document.getElementById("b2").innerHTML="";
    document.getElementById("c2").innerHTML="";
    document.getElementById("a3").innerHTML="";
    document.getElementById("b3").innerHTML="";
    document.getElementById("c3").innerHTML="";

    document.getElementById("a1").style.color = "";
    document.getElementById("b1").style.color = "";
    document.getElementById("c1").style.color = "";
    document.getElementById("a2").style.color = "";
    document.getElementById("b2").style.color = "";
    document.getElementById("c2").style.color = "";
    document.getElementById("a3").style.color = "";
    document.getElementById("b3").style.color = "";
    document.getElementById("c3").style.color = "";

    // reset state
    document.getElementById("status").textContent = "";
    xTurn = true;
    gameOver = false;

}

function show(msg) {
    document.getElementById('status').textContent = msg; // winner on the page
    gameOver = true;
}

function checkWin() {
    const a1 = document.getElementById('a1').innerHTML;
    const b1 = document.getElementById('b1').innerHTML;
    const c1 = document.getElementById('c1').innerHTML;
    const a2 = document.getElementById('a2').innerHTML;
    const b2 = document.getElementById('b2').innerHTML;
    const c2 = document.getElementById('c2').innerHTML;
    const a3 = document.getElementById('a3').innerHTML;
    const b3 = document.getElementById('b3').innerHTML;
    const c3 = document.getElementById('c3').innerHTML;

    // X wins 
    if (a1 == b1 && b1 == c1 && a1 == 'X') { show('X wins!'); return; } 
    if (a2 == b2 && b2 == c2 && a2 == 'X') { show('X wins!'); return; } 
    if (a3 == b3 && b3 == c3 && a3 == 'X') { show('X wins!'); return; } 
    if (a1 == a2 && a2 == a3 && a1 == 'X') { show('X wins!'); return; } 
    if (b1 == b2 && b2 == b3 && b1 == 'X') { show('X wins!'); return; } 
    if (c1 == c2 && c2 == c3 && c1 == 'X') { show('X wins!'); return; } 
    if (a1 == b2 && b2 == c3 && a1 == 'X') { show('X wins!'); return; }
    if (c1 == b2 && b2 == a3 && c1 == 'X') { show('X wins!'); return; }

    // O wins 
    if (a1 == b1 && b1 == c1 && a1 == 'O') { show('O wins!'); return; } 
    if (a2 == b2 && b2 == c2 && a2 == 'O') { show('O wins!'); return; } 
    if (a3 == b3 && b3 == c3 && a3 == 'O') { show('O wins!'); return; } 
    if (a1 == a2 && a2 == a3 && a1 == 'O') { show('O wins!'); return; } 
    if (b1 == b2 && b2 == b3 && b1 == 'O') { show('O wins!'); return; } 
    if (c1 == c2 && c2 == c3 && c1 == 'O') { show('O wins!'); return; } 
    if (a1 == b2 && b2 == c3 && a1 == 'O') { show('O wins!'); return; }
    if (c1 == b2 && b2 == a3 && c1 == 'O') { show('O wins!'); return; }
}
