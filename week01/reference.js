/*function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
 
  return arr.shift();;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
*/

//compare the string ===, !==, (==, != this looks inside the value and no mater if its defferent type)
let someNum=56;
let someString='56';
console.log ('===', someNum === someString);
console.log ('==', someNum == someString);

console.log ('!==', someNum !== someString);
console.log ('!=', someNum != someString);

let y=45;
let x=45;
console.log('>', x>y);
console.log('<', y<x);
console.log('<=', y<=x);

console.log(6/0);
console.log(6/0===10/0);

let n=5;
let yy=n+5;
console.log(n !== yy);
console.log(n && yy);