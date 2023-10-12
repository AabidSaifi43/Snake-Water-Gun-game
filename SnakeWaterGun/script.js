// let user = prompt("Enetr S, W, G");
// let b = Math.floor(Math.random()*3);
// let cpu = ['S', 'W', 'G'][b];

// const match = (user, cpu) =>{
//     if(user === cpu){
//         return 'Nobody Winner Try Again'
//     }
//     else if (user==="S" && cpu === "W"){
//         return " The Winner is ' USER ' "
//     }
//     else if (user==="W" && cpu === "S"){
//         return " The Winner is ' CPU ' "
//     }
//     else if (user==="W" && cpu === "G"){
//         return " The Winner is ' USER ' "
//     }
//     else if (user==="G" && cpu === "W"){
//         return " The Winner is ' CPU ' "
//     }
//     else if (user==="G" && cpu === "S"){
//         return " The Winner is ' USER ' "
//     }
//     else if (user==="S" && cpu === "G"){
//         return " The Winner is ' CPU ' "
//     }
// }
// let result = match(user, cpu);
// document.write(` Cpu: ${cpu} <br> User: ${user} <br> \n The Winner is: ${result} `);






// const options = ['S', 'W', 'G'];

// const getRandomOption = () => options[Math.floor(Math.random() * options.length)];

// const match = (user, cpu) => {
//     if (user === cpu) {
//         return "Nobody Winner, Try Again";
//     } else if (
//         (user === "S" && cpu === "W") ||
//         (user === "W" && cpu === "G") ||
//         (user === "G" && cpu === "S")
//     ) {
//         return "The Winner is 'USER'";
//     } else {
//         return "The Winner is 'CPU'";
//     }
// };

// let user = prompt("Enter S, W, G").toUpperCase();
// let cpu = getRandomOption();
// let result = match(user, cpu);

// document.write(`Cpu: ${cpu} <br> User: ${user} <br> \n The Winner is: ${result}`);   


const options = ['S', 'W', 'G'];

const getRandomOption = () => options[Math.floor(Math.random() * options.length)];

const match = (user, cpu) => {
  if (user === cpu) {
    return "Nobody Winner, Try Again";
  } else if (
    (user === "S" && cpu === "W") ||
    (user === "W" && cpu === "G") ||
    (user === "G" && cpu === "S")
  ) {
    return "The Winner is 'USER'";
  } else {
    return "The Winner is 'CPU'";
  }
};

function playGame() {
  let user = document.getElementById('userInput').value.toUpperCase();
  if (!options.includes(user)) {
    alert("Invalid input! Please enter 'S', 'W', or 'G'.");
    return;
  }
  let cpu = getRandomOption();
  let result = match(user, cpu);

  document.getElementById('result').innerHTML = `Cpu: ${cpu} <br> User: ${user} <br> \n The Winner is: ${result}`;
}

