// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  const copyOfCats = [...cats, name];
  return copyOfCats;
}

function prependCat(name) {
  const copyOfCats = [name, ...cats];
  return copyOfCats;
}

function removeLastCat() {
  return cats.slice(0,-1);
} 

function removeFirstCat() {
  return cats.slice(1);
}
