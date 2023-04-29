function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

console.log(sample(["rock", "paper", "scissors"]));
