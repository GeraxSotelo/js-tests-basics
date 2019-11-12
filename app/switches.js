// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
    let out = 0;
    switch (day) {
        case 'sunday':
            if (offset == true) {
                out = 7;
            } else {
                out = 1;
            }
            break;
        case 'monday':
            if (offset == true) {
                out = 1;
            } else {
                out = 2;
            }
            break;
        case 'tuesday':
            if (offset == true) {
                out = 2;
            } else {
                out = 3;
            }
            break;
        case 'wednesday':
            if (offset == true) {
                out = 3;
            } else {
                out = 4;
            }
            break;
        case 'thursday':
            if (offset == true) {
                out = 4;
            } else {
                out = 5;
            }
            break;
        case 'friday':
            if (offset == true) {
                out = 5;
            } else {
                out = 6;
            }
            break;
        case 'saturday':
            if (offset == true) {
                out = 6;
            } else {
                out = 7;
            }
            break;
        default:
            out = "That's not a day of the week";
    }

    return out;
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    let result = "";
    let lowScore;
    let highScore;

    scoreBoard = score - par;
    if (scoreBoard <= -3) {
        highScore = scoreBoard;
    } else if (scoreBoard >= 3) {
        lowScore = scoreBoard;
    }

    switch (scoreBoard) {
        case highScore:
        case -3:
            result = "Ace";
            break;
        case -2:
            result = "Eagle";
            break;
        case -1:
            result = "Birdie";
            break;
        case 0:
            result = "Par";
            break;
        case 1:
            result = "Bogie";
            break;
        case 2:
            result = "Double Bogie";
            break;
        case 3:
        case lowScore:
            result = "Ouch";
            break;
    }

    return result;
}


// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
    switch (card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count++;
            break;
        case '7':
        case '8':
        case '9':
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count >= 0) {
        return count + ' bet';
    } else if (count < 0) {
        return count + ' hold';
    }
}
