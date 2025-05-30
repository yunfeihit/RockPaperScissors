function getComputerChoice() {
    let x = Math.random();
    if( x > 0.6666) return "rock";
    else if (x > 0.3333) return "paper";
    else return "scissors";
}

/* test if getComputerChoice() is random */
/*
let rock = 0, paper = 0, scissors = 0;
for (i = 1; i < 1000; i++) {
    let result = getComputerChoice();
    switch (result) {
        case "rock":
            rock++;
            break;
        case "paper":
            paper++;
            break;
        case "scissors":
            scissors++;
            break;
    }
}
console.log(rock,paper,scissors);
*/

