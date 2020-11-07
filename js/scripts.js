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
function beepBoop(number) {
  let numArray = [];
  for(let i = 1; i <= number; i +=1) {
    numArray.push(i);
  }
}

return numArray.join(", ");


if(i == ("3")) {
  numArray.push("Won't You Be My Neighbor?");
} else if (i == ("2")) {
  numArray.push("Boop!");
} else if (i == ("1")) {
  numArray.push("Beep!");
} else {
$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    num1 = $("input#number").val();
    let enterNumber = beepBoop(num1);
    console.log(enterNumber);
  });
});