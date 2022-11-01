function reverseString(str) {
    let reverseArr = [];
    for (char of str){
        reverseArr.unshift(char);
    } return reverseArr.join('');
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Write a function that takes in 1 arguyment (a string) and outputs the string in reverse
// Using iteration, make every character of the string an array element, 
// then .push() it into a new array (so it is added to the end and then will consequently be in reverse after the full iteration)
// Then, .unshift() it 