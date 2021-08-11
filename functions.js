/**
 * @file Contains the functions for the String Calculator Task
 * @author Luisa Escalona <escalona.luisa@gmail.com>
 */

/**
 * Function to throw a custom Exception 
 * @param {String} message - The message to be thrown
 * @returns the Error object
 */
function StringCalculatorException(message) {
  const error = new Error(message);
  return error;
}

/**
 * Checks if the number is positive and valid, or negative.
 * @param {Integer} number - The number to be evaluated
 * @param {Array} negatives - The array where all negative values are added 
 * @returns an Integer with the number to be added to the sum
 */
function Evaluate(number, negatives){
  if(number >= 0){
    if(number <= 1000)
      return number
    else
      return 0
  }
  else{
    negatives.push(number)
    return 0
  }
}

/**
 * Calculates the sum of the integers in the String separated by regular characters like , and \\n 
 * or by custom character configured at the beginning of the String, using this format: //[delimiter]\n[delimiter separated numbers]
 * @param {String} numbers - separated numbers
 * @returns an Integer with the sum, or an exception when the numbers are negative or have invalid characters 
 */
function Add(numbers){
  var numbersArray, i, sum, intNumber, innerValue, negatives
  negatives = []
  sum = 0
  if(numbers.trim().length > 0){
    if(numbers.indexOf("//") == 0){//if it has custom separator
      var separation = numbers.split("\\n")
      var customSeparator = separation[0].substring(2) // \n is ignored, taken as a new line, not as characters
      var stringNumbers = separation[1]    
      numbersArray = stringNumbers.split(customSeparator)
      for(i=0; i < numbersArray.length; i++){
        if(isNaN(numbersArray[i])){
          throw new StringCalculatorException("Invalid number: "+numbersArray[i]);
        }
        intNumber = parseInt(numbersArray[i])
        value = Evaluate(intNumber, negatives)
        sum += value          
      }
    }
    else{//if it has regular separators , and \n
      numbersArray = numbers.split(",")
      var piece, innerValue
      for(i=0; i < numbersArray.length; i++){
        piece = numbersArray[i]
        if(piece.indexOf("\\n") >= 0){ //if it has the \n separator
          innerValue = piece.replace(/\\n/g,"")//replace the \n with an empty string
          if(isNaN(innerValue)){
            throw new StringCalculatorException("Invalid number: "+innerValue);
          }
          intNumber = parseInt(innerValue)
          value = Evaluate(intNumber, negatives)
          sum += value
        }
        else{
          if(isNaN(piece)){
            throw new StringCalculatorException("Invalid number: "+piece);
          }
          intNumber = parseInt(piece)
          value = Evaluate(intNumber, negatives)
          sum += value
        }
      }
    }
    if(negatives.length > 0)
      throw new StringCalculatorException("Negatives not allowed: "+negatives);
    else
      return sum
  }
  else
    return 0
}

module.exports = Add, StringCalculatorException