// function beepBoop(number) {
//   let numArray = [];
//   for(let i = 1; i <= number; i +=1) {
//     if(i == ("3")) {
//       numArray.push("Won't You Be My Neighbor?");
//     } else if (i == ("2")) {
//       numArray.push("Boop!");
//     } else if (i == ("1")) {
//       numArray.push("Beep!");
//     } else {
//       numArray.push(i);
//     }
//   }

//   return numArray.join(", ");
// }

//Pushes index to numArray//
function beepBoop(number1) {
  let numArray = [];
  for(let i = 1; i <= number1; i +=1) {
    numArray.push(i);
  };
  //Creates a new array with .map function using previous array//
  let newArray = numArray.map(function(number2) {
    //creates new variable from input of .map function and turns it into a string and splits by character//
    let arrayStr = number2.toString().split("");
    // states that if a character in the new array includes "x", that character will return as "Beep", "Boop", "WYBMN?"//
    if (arrayStr.includes("3")) {
      return "Won't you be my neighbor?";
    } else if (arrayStr.includes("2")) {
      return "Boop!";
    } else if (arrayStr.includes ("1")) {
      return "Beep!";
    } else {
    // if the above are not triggered, the input number2 will return
      return number2;
    };
  });
  console.log(newArray.join(", "));
  // this will return the new array with ", " in between each "character"//
  return newArray.join(", ");
}

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    //creates new variable based on user form input//
    num1 = $("input#number").val();
    //creates new variable based on the beepBoop function with num1/user input as the input//
    let enterNumber = beepBoop(num1);
    console.log(enterNumber);
  });
});