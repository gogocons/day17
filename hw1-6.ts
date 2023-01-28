// 1) Create a function that accepts an array of strings, and prints out each one in a loop.

function printArrayOfStrings(array: string[]) {
  for (let string of array) {
    console.log(string);
  }
}

const arrayOfStrings = [
  "a string",
  "another string",
  "yet another string",
  "why are there so many strings???",
];

printArrayOfStrings(arrayOfStrings);

// 2) Create a function that takes 3 numbers, adds them together, and returns them as a number.

function addThreeNumbers(x: number, y: number, z: number): number {
  return x + y + z;
}

console.log(addThreeNumbers(2, 3, 5)); //expect 10

// 3) Create a function that takes a string as an argument,
// and returns a promise to return "hello" plus that string, as a string..

function helloPromise(input: string): Promise<string> {
  return new Promise((resolve) => {
    resolve(`hello ${input}`);
  });
}

console.log(helloPromise("gogocons"));

helloPromise("gogocons").then((resolve) => {
  console.log(resolve);
});

// 4) Create a function that accepts a single array where the elements can be strings OR numbers OR booleans.
// Loop over the array, and if the element is a string, print the string plus the text "is a string".
// If it's a number, print out the number plus "is a number".
// If it's a boolean, print out the boolean plus "is a boolean".

function arrayChecker(array: (string | number | boolean)[]) {
  for (let element of array) {
    if (typeof element === "string") {
      console.log(`${element} is a string`);
    } else if (typeof element === "number") {
      console.log(`${element} is a number`);
    } else if (typeof element === "boolean") {
      console.log(`${element} is a boolean`);
    }
  }
}

const mixedArray = ["name", 5, "some random text", 1, false, 7, true, false];

arrayChecker(mixedArray);
