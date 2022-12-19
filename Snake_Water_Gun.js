// Use JavaScript to create a game of Snake, Water & Gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare Win or Loss using alert. Use confirm and prompt wherever required.

let characters = "SWG";
let sure = confirm("Are you ready to play");


while (sure != false) {

    let compTurn = characters.charAt(Math.floor(Math.random() * 3
    ));
    let yourTurn = prompt("Its your turn make your move.");

    if (yourTurn == 'S' || yourTurn == 'G' || yourTurn == 'W') {
        if (yourTurn == compTurn) {
            alert("Draw!")
            console.log(`You both choose ${yourTurn}`);
        }
        else if (yourTurn == 'S' && compTurn == 'W' || yourTurn == 'W' && compTurn == 'G' || yourTurn == 'G' && compTurn == 'S') {
            alert("You win!");
            console.log(`Computer's move was ${compTurn}`);
        }
        else {
            alert("Better Luck Next Time!");
            console.log(`Computer's move was ${compTurn}`);
        }
    }else{
        alert("Your move was invalid")
    }

    sure = confirm("Wanna play again");

}