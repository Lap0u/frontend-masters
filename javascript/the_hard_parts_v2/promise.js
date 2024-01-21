function display (data) {
  console.log(data)
}

const futureData = fetch("https://frontendmasters.com/courses/javascript-hard-parts-v2/promises-example-then/")
console.log(futureData.value)
futureData.then(display)

console.log('me first')