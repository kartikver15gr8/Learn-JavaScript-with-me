let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

console.log(rock, paper, scissor);

let square = { 'rock': 0, 'paper': 0, 'scissor': 0 };

rock.onclick = () => console.log("Rock!");

let boxes = document.querySelectorAll(".box");
console.log(boxes);


boxes.forEach(box => {
    box.onclick = () => {
        square[box.value] += 1;
        box.innerText = square[box.value];
    }
})


boxes.forEach(box => {
    box.onclick = () => {
        // square[box.value] += 1;
        // box.innerText = square[box.value];
        const pcChoice = computersChoice(choices);
        if (box.value == pcChoice) {
            console.log("Draw", pcChoice);
            box.innerText = square[box.value];
        } else if ((box.value == 'rock' && pcChoice == 'scissor') || (box.value == 'scissor' && pcChoice == 'paper') || (box.value == 'paper' && pcChoice == 'rock')) {
            console.log("You Win!", pcChoice)
            square[box.value] += 1;
            box.innerText = square[box.value];
        } else {
            console.log("You Lose!", pcChoice);
            square[box.value] -= 1;
            box.innerText = square[box.value];
        }
    }
})

let clearText = document.getElementById('clear');

const clearInnerText = () => {
    boxes.forEach(box => {
        square[box.value] = 0;
        box.innerText = '';
    })
}


clearText.onclick = () => clearInnerText();


let choices = ['rock', 'paper', 'scissor'];
const computersChoice = (choices) => {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

console.log(computersChoice(choices));