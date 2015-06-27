/*
 * The Collatz sequence for a number applies a couple of rules to reach the number 1..
 * Given a > 0 number. Return the collatz sequence for that number.
 * A collatz sequence for a number is done in the following manner:
 * It always ends with the number 1.
 * If the number is even, then divide it by 2 and calculate the next number in the 
 * sequence for that number.
 * If the number is odd, then multiplty by 3 and add one, calculate the next number in 
 * the sequence.
 */
// (Num a, Eq a) => a -> [a]
function collatz(n) {
    if(n === 1) {
        return [1];
    }

    if(n % 2 === 0) {
        return [n].concat(collatz(n / 2));
    } else {
        return [n].concat(collatz((n*3) + 1));
    }
}

module.exports = collatz; 
