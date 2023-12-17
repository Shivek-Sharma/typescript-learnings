// A tuple type is another sort of Array type that knows exactly how many elements it contains
// and exactly which types it contains at specific positions.

let rgb: [number, number, number];
rgb = [255, 124, 58];
// rgb = [255, 147, 45, 0.5] //not allowed
// rgb = [255, "147", 47] //not allowed

/* -------------------------------------------------- */

type User = [number, string];
const newUser: User = [112, "shivek"];
// const newUser: User = [112, "shivek", true] //not allowed
// const newUser: User = ["112", "shivek"] //not allowed
// newUser[1] = "ramesh" //not allowed

/* -------------------------------------------------- */

function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash; //destructuring

  console.log(inputString); //const inputString: string = "hello"
  console.log(hash); //const hash: number = 7458
}

doSomething(["hello", 7458]);