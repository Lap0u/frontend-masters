const createFunction = () => {
  let counter = 0
  function incrementCounter () {
    counter++
    console.log(counter)
  }
  function decrementCounter () {
    counter--
    console.log(counter)
  }
  return { inc: incrementCounter, dec: decrementCounter }
}
const { inc, dec } = createFunction()
inc()
inc()
dec()
dec()