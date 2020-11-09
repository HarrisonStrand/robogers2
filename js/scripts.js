//Pushes input index to numArray//
function beepBoop(number1) {
  let numArray = [];
  for(let i = 1; i <= number1; i +=1) {
    numArray.push(i);
  };
  //Creates a new array with .map function using previous array//
  let newArray = numArray.map(function(number2) {
    //creates new variable from input of .map function and turns it into a string and splits by index//
    let arrayStr = number2.toString().split("");
    // states that if a character in the new array includes "n", that index will return as "Beep", "Boop", "WYBMN?"//
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
  // this will return the new array with ", " in between each index//
  return (newArray.join(", "));
}

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    //creates new variable based on user form input//
    let num1 = $("input#number").val();
    //creates new variable based on the beepBoop function with num1/user input as the argument//
    let enterNumber = beepBoop(num1);
    $("ul#resultprint").append(enterNumber);
    console.log(enterNumber);
  });
});


//Notes:
/* What I figured out for my resubmission, is that you have to break everything into small pieces.
Once I broke the problem down into smaller tests and pieces I was able to put something together.
Originally I could not get every instance of the numbers to change, but only the first three
of the array. I also figured out through trial and error that every action I want to happen for a function
has to happen within that function. You cannot call things outside of the function. I really liked the .map
function for solving this problem. Under the one function you have the part that creates the original array.
You then create a part that will state a new variable and make it the newly mapped array. Only then can you
do your if and else branching and use your .includes. I found out that if you just try to push everything to
the original array, the strings come up as strings but the rest of the index is all numbers. The toString was
really helpful, as well as the character split. My big ah-ha moment was realizing that the parameters in your
business logic are essentially theoretical place holders and declaring your variable as an input in your
user interface logic (line 34) is how you run your input through your previous function to get an output.
I'm sure there are a million other ways to do this problem, I looked up solves for fizzbuzz and there are a
ton of different options. Glad this one worked out, I'll be keeping this file for my notes in the future.*/
