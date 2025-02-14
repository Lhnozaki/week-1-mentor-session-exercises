/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

 function firstReverse(str) {
   if(typeof str !== "string") {
     return null;
   } else {
   let arry1 = str.split("").reverse().join("");
   return arry1;
   };
 }

console.log(firstReverse("word"));
console.log(firstReverse(12345));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str) {
  if(typeof str !== "string") {
    return null;
  } else {
  let arry2 = str.split("").sort().join("");
  return arry2;
  };
}

console.log(alphaOrder("hello there"));
console.log(alphaOrder(12345));

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount(num) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  if(typeof num !== "string") {
    return null;
  } else {
    let arry3 = num.split("");
    for(i = 0; i < arry3.length; i++) {
      for(j = 0; j < vowels.length; j++) {
        if(arry3[i] == vowels[j]) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(vowelCount("four"));
console.log(vowelCount(12345));

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

function timeConvert(num) {
  let hr = 0;
  let min = 0;
  if(typeof num !== "number") {
    return null; 
  } else {
    for(i = 0; i < num; i++) {
      min++;
      if (min >= 60) {
        hr++;
        min -= 60;
      }
    }
    return `${hr}:${min}`;
  };
}

console.log(timeConvert(68));
console.log(timeConvert("five"));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str, num) {
  let stringArry = []
  if(num < 0 || typeof str !== "string") {
    return null;
  } else {
    for(i = 0; i < num; i++) {
      let arry4 = str.split(" ")
      stringArry.push(arry4[0])
    }
    return stringArry.join("");
  }
}

console.log(repeatString("hello", 3));
console.log(repeatString("money", -3));
console.log(repeatString(3,5));

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
