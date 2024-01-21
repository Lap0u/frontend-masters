const applyFunctionToArray = (myArray, myFunction) => {
  const output = []
  for (let i = 0; i < myArray.length; i++) {
    output.push(myFunction(myArray[i]))
  }
  return output
}

const multiplyBy2 = (input) => input * 2
const add2 = (input) => input + 2
const sub2 = (input) => input - 2

const currArray = [1, 2, 3, 4]
console.log(applyFunctionToArray(currArray, multiplyBy2))
console.log(applyFunctionToArray(currArray, add2))
console.log(applyFunctionToArray(currArray, sub2))

