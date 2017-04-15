/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

var poe = "Cool story Poe";

function firstReverse(str){
  var reversePoe = "";
  if(typeof str === "string"){
    reversePoe = str.split("");
    reversePoe = reversePoe.reverse();
    reversePoe = reversePoe.join("");
    return reversePoe;
  } else {
    return null;
  }
}

console.log(firstReverse(poe));


 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

var magritte = "This pipe is not a pipe";

function alphaOrder(str){
  if(typeof str === "string"){
    var sortMagritte = str.split("");
    sortMagritte.sort();
    sortMagritte = sortMagritte.join("");
    return sortMagritte
  } else {
    return null;
  }
}

console.log(alphaOrder(magritte));

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

var ehrmann = "amid the noise and haste";

function vowelCount(str){
  var total = 0;
  var vowelArr = ["a", "e", "i", "o", "u"];
  if(typeof str !== "string"){//if not a string return null
    return null;
  } else {
    for(var i = 0; i < vowelArr.length; i++){//iterates through variable
      for(var j = 0; j < str.length; j++){ //splits string into indiv letters
        //console.log(str[j]);
        if(str[j] === vowelArr[i]){ //searches through ehrmann variable for a,e,i,o,u
          total++; //counts the vowels
        }
      }
    }
  return total; //returns total
  }
}

console.log(vowelCount(ehrmann));

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 function timeConvert(str){
  if(typeof str === "number"){
    var hours = Math.floor(str/60);
    var mins = str % 60;
    return hours + ":" + mins;
  } else{
    return null;
  }
 }

 console.log(timeConvert(456));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */


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
    repeatString: null
}
