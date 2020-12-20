
 function getFinalAvg() {
  var HwAvg = parseInt(document.myForm.HwAvg.value);
  var midterm = parseInt(document.myForm.midterm.value);
  var final = parseInt(document.myForm.final.value);
  var acr = parseInt(document.myForm.final.value);
  if (isNaN(HwAvg) || isNaN(midterm) || isNaN(final) ||  isNaN(acr) )
    alert("Invalid Input - Enter numbers only ")
  else {
    var finalNum = finalAvg(HwAvg, midterm, final, acr);
    document.myForm.result.value = finalNum;
    document.myForm.letter.value = finalLetter(finalNum);
  }
 }

 function finalAvg(HwAvg, midterm, final, acr)
 {

   var avg = ((.5 * HwAvg) + (.2 * midterm) + (.2 * final) + (.1 * acr));
   var avgtoFixed = avg.toFixed(0);
   return avgtoFixed;
 }

 function finalLetter(finalNum)
 {
   var letter;
   if (finalNum >= 90)
    letter = 'A';
  else if (finalNum < 90 && finalNum >= 80)
    letter = 'B';
  else if (finalNum < 80 && finalNum >= 70)
    letter = 'C';
  else if (finalNum < 70 && finalNum >=60)
    {
      letter = 'D';
      alert("Student must retake course");
    }
  else {
    letter = 'F'
    alert("Student must retake course");
  }
  return letter
}

//Part 2
function getTotals() {
  var numItem1 = parseInt(document.salesForm.numItem1.value);
  var numItem2 = parseInt(document.salesForm.numItem2.value);
  var numItem3 = parseInt(document.salesForm.numItem3.value);
  var numItem4 = parseInt(document.salesForm.numItem4.value);

if (isNaN(numItem1) || isNaN(numItem2) || isNaN(numItem3) || isNaN(numItem4))
alert("Invalid Input - Enter numbers only ")
else {
  var itemTotal1 = parseInt(itemTotals(numItem1, 239.99));
  document.salesForm.totalItem1.value = itemTotal1;
  var itemTotal2 = parseInt(itemTotals(numItem2, 129.75));
  document.salesForm.totalItem2.value =  itemTotal2;
  var itemTotal3 = parseInt(itemTotals(numItem3, 99.95));
  document.salesForm.totalItem3.value = itemTotal3;
  var itemTotal4 = parseInt(itemTotals(numItem4, 350.89));
  document.salesForm.totalItem4.value = itemTotal4;
  var final_total = finalTotal(itemTotal1, itemTotal2, itemTotal3, itemTotal4);
  document.salesForm.final_total.value = final_total;
  document.salesForm.salary.value = salary(final_total);
  }
}
function salary(final_total) {

  var salary1 = (final_total * .09) + 200;
  return salary1;
}

function finalTotal(itemTotal1, itemTotal2, itemTotal3, itemTotal4) {

  var total1 = itemTotal1 + itemTotal2 + itemTotal3 + itemTotal4;
  return total1;
}


function itemTotals(quantity, price) {
  var total = quantity * price;
  return total.toFixed(2);
}


// Part 3
function chargeAccount() {
  var account = document.creditForm.account.value;
  var balance = parseInt(document.creditForm.balance.value);
  var itemsCharged = parseInt(document.creditForm.itemsCharged.value);
  var creditsCharged = parseInt(document.creditForm.creditsCharged.value);
  var creditLimit = parseInt(document.creditForm.creditLimit.value);

  if(account == "")
  {
    alert("Please Enter Account number")
  }
  else {
    var newBalance1 = newBalance(balance, itemsCharged, creditsCharged);
    var message = "The new balance is " + newBalance1 ;
    document.creditForm.summary.value = message ;
    var newLimit;
    if (creditLimit < newBalance1)
      newLimit = "Credit Limit exceeded by " + availCredit(creditLimit, newBalance1);
    else
      newLimit = "Credit available is " + availCredit(creditLimit, newBalance1);
    document.creditForm.newLimit.value = newLimit;
  }
}

function availCredit(creditLimit, newBalance1) {
  return Math.abs(creditLimit - newBalance1);

}

function newBalance(balance, itemsCharged, creditsCharged){
  var balance2 = balance + itemsCharged - creditsCharged;
  return balance2;
}

// Part 6
/* User Math.random to produce two one digit integers (0-9). Student types answer into text field.
*/

var theAnswer;
function getQuestion() {
	multiply1 = Math.floor((Math.random() * 9)+1);
	multiply2 = Math.floor((Math.random() * 9)+1);
	document.getElementById("results").innerHTML = ("How much is " + multiply1 + " times " + multiply2 + "?");
	theAnswer = multiply1 * multiply2;
	document.inputform.answer.value = "";//emptys the input field
}
function testAnswer() {
	if (theAnswer == document.inputform.answer.value) {
		window.status = "Very Good";
		getQuestion();
	}
	else {
		window.status = "Try again";//writes to the status bar
		document.inputform.answer.value = "Try again";//writes to the form field
	}
}



// EXTRA CREDIT: CRAPS
// Declare the variables that make the game play
var dieRollOne, dieRollTwo, dieRollSum, diePoint, dieResult;
diePoint = 'zero';
dieResult = '';
// When Roll Dice is pressed, this function fires
function craps_game() {

    // If there has not been a point assigned, we are assuming we're at the beginning of a game
    if (diePoint == 'zero') {

        // The dice are rolling
        dieRollOne = Math.floor(Math.random()*6) + 1;
        dieRollTwo = Math.floor(Math.random()*6) + 1;

        // The sum of the dice are calculated
        dieRollSum = dieRollOne + dieRollTwo;

        // if the sum is a 7 or 11, player wins
        switch(dieRollSum) {
            case 7:
            case 11:
                dieResult = "You rolled a 7 or an 11, so you win!";
                document.getElementById("roll").disabled = true;
                print_row();
                break;

            // If the sum is 2, 3, 12, player loses
            case 2:
            case 3:
            case 12:
                dieResult = "You rolled a 2, 3, or 12, so you lose :( Try again!";
                document.getElementById("roll").disabled = true;
                print_row();
                break;

            // If any other sum, it becomes a point game.
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
                diePoint = dieRollSum;
                dieResult = "It's a point game now. Roll again and try to get a " + diePoint;
                print_row();
                break;
        }
    } else {

        // If this is a point game, the rules change. Roll the dice:
        dieRollOne = Math.floor(Math.random()*6) + 1;
        dieRollTwo = Math.floor(Math.random()*6) + 1;

        // Get the sum:
        dieRollSum = dieRollOne + dieRollTwo;

        // If player matches the point, they win. If they get a 7, they lose. If any other, they need to roll again.
        switch(dieRollSum) {
            case diePoint:
                dieResult = "You made your point, so you win!";
                document.getElementById("roll").disabled = true;
                print_row();
                break;
            case 7:
                dieResult = "Oh no, a 7! You lose."
                document.getElementById("roll").disabled = true;
                print_row();
                break;
            default:
                dieResult = "You have to get a " + diePoint + " to win this game! Roll again.";
                print_row();
                break;
        }
    }
}
// Prints each body row with the results of each toss
function print_row() {
    document.getElementById("rolldata").innerHTML += ("<tr class=\"bodyrow\"><td>" + dieRollOne + "</td><td>" + dieRollTwo + "</td><td>" + dieRollSum + "</td><td>" + diePoint + "</td><td>" + dieResult + "</td></tr>");
}
// Resets the game by removing body rows, allowing the Roll Dice button if it's disabled, and resetting the Point and Results value.
function craps_reset() {
    document.getElementById("roll").disabled = false;
    $('#part-7 .bodyrow').remove();
    diePoint = 'zero';
    dieResult = '';
}
