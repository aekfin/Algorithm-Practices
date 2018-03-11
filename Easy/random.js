function Random () {
  return parseInt((Math.random() * 6) + 1)
}
console.log(Random() + (Random() % 2))
