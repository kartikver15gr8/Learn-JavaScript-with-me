let a = document.getElementById("count");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let clear = document.getElementById("erase");
let save = document.getElementById("save");
let clearHistory = document.getElementById("clearHistory");
let totalCount = document.getElementById("finalResult");

save.onclick = () => {
     totalCount.innerText += `- ${a.innerText}`;
     count = 0;
}


clearHistory.onclick = () => {
    count = 0;
    totalCount.innerText = "Total Count! ";
}

let count = 0;

plus.onclick = () => {
    count += 1;
    a.innerText = count;
}

minus.onclick = () => {
    if (count > 0) {
        count -= 1;
        a.innerText = count;
    }
}

clear.onclick = () => {
    count = 0;
    a.innerText = count;
}



// let welcomeEl = document.getElementById("welcome-el");

// let naam = "Kartikey";
// let greeting = "Congratulations for this massive success!"

// welcomeEl.innerText = `${naam}! ${greeting}`;

// welcomeEl.innerText += '🎉🎉'