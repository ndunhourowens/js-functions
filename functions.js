/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString (number){

  var num = number.toString();
  return num;
 }
numberToString(4);
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n){
  var addOne = n;
  addOne ++;
  return addOne;
}
increase(4);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n){
  var minus = n;
  minus --;
  console.log(minus);
  return minus;
}
decrease(7);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
  var addEm = x + y;
  console.log(addEm);
  return addEm;
}
add(9,8);
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y){
  var sub = x - y;
  console.log(sub);
  return sub;
}
subtract(3,10);
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
  var times = x*y;
  return times;
}
multiply(8,8);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
  var div = x/y;
  return div;
}
divide(9,3);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
  var sqr = x*x;
  return sqr;
}
square(4);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation,x,y){
  if (operation === "add"){
    var addTotal = x + y;
    console.log(x + " + " + y + " = " + addTotal);
    return addTotal;
  }else if (operation === "subtract"){
    var subTotal = x - y;
    console.log(x + " - " + y + " = " + subTotal);
    return subTotal;
  }else if (operation === "multiply"){
    var mulTotal = x * y;
    console.log(x + " * " + y + " = " + mulTotal);
    return mulTotal;
  }else {
    var divTotal = x / y;
    console.log(x + " / " + y + " = " + divTotal);
    return divTotal;
  }
}
calculate("add",7,8);
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a,b){
  if(a>b){
    return true;
  }
  return false;
}
isGreaterThan(7,3);
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){
  if(a<b){
    return true;
  }
  return false;
}
isLessThan(8,7);
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b){
  if(a===b){
    return true;
  }
  return false;
}
areEqual(8,8);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y){
  if(x<y){
    console.log(x);
    return x;
  }
  console.log(y);
  return y;
}
minimum(5,1);
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x,y){
  if(x>y){
    return x;
  }
  return y;
}
maximum(8,3);
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){
  if(n % 2 === 0){
    return true;
  }else {
    return false;

  }
}
isEven(6);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
  if(n%2===0){
    return false;
  }else {
    return true;
  }
}
isOdd(9);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score,totalMax){
  var total = score / totalMax;
  if(total >= 0.90){
    return "A";
  }else if(total >= 0.80){
    return "B";
  }else if(total >= 0.70){
    return "C";
  }else if(total >= 0.60){
    return "D";
  }else {
    return "F";
  }
}
letterGrade(96,100);
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant){
  if (restaurant.hasOwnProperty('reviews')){
    restaurant.reviews += 1;
  }else {
    restaurant.reviews = 1;
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1,word2){
  return word1 + " " + word2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circ = {};
  circ.circumference = 2*Math.PI*radius;
  circ.area = Math.PI*(radius*radius);
  return circ;
}