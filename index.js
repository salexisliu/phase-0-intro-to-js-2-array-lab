// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name)
}

function destructivelyPrependCat(name){
  cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  const copyOfCats = [...cats, name]
  return copyOfCats
  //copyOfCats.push(name)
  //return copyOfCats
}

function prependCat(name) {
  const copyOfCats = [name, ...cats]
  return copyOfCats
  //copyofcats.unshift(name)
//return copyOfCats
}

function removeLastCat() {
  return cats.slice(0,-1)
} 

function removeFirstCat() {
  return cats.slice(1)
}
