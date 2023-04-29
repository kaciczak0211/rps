function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


console.log(sample(["rock", "paper", "scissors"]));


function computerChoice(){

    if(computer === "rock" && sample==="rock"){
    console.log("Tie!")}
}


const computer = "rock";
computerChoice();