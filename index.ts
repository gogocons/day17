// lets make my function "add" type-safe.

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1, 2));

function printsName(name: string): void {
  console.log("hello", name);
}

printsName("gogocons");

// lets make a small version og the game we've been working on, but type-safe, and easier.

// class Character {
//   constructor(name, level) {}

//   getDamage() {
//     return 5;
//   }
// }

// class Shaman extends Character {}

// const myShaman = new Shaman("gogo", 1);

// function fight(character) {
//   console.log("I deal", character.getDamage());
// }

// fight(myShaman);
