function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      /*triple equals, === checks for strict equality. Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. */
      break
    }
      else {
        array[i] = changeValue
        /*singe equals, = , assigns the value on the left to the object on the right.*/
        /*double equals, == is loose equality. will try to convert data to the same type before checking equality.*/
      }
    }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0, l = array.length; i < l; i++){
    if (array[i] === skipValue) {
      continue
      /*if (condition is met), skip operating on this value. "continue with the other values that don't meet this condition."*/
        }
      array[i] = changeValue
    }
  return array
}
/* ask about the structure here because it seems organized super weird. Also ask if you can use break/continute with forEach().*/

function findBy(array, findFn){
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}
/* generic break find function. accepts and array and a condition function to check for. this function is a callback function. in this case, findBy([1, 1, 1, 1, c, 1, 2], n => n === c)) is the callback function. takes in the array and checks if the element in the array (array[i]) === Math.floor(Math.random() * 100). If it does, that element will be returned. */
