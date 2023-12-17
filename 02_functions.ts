function addTwo(num: number): number {
  return num + 2;
}

const getUpper = (val: string): string => {
  return val.toUpperCase();
}

let myValue = addTwo(5);
let myString = getUpper("shivek");

/* -------------------------------------------------- */

function getResponse(myVal: number) {
  if (myVal < 5) {
    return false;
  }
  return "200 OK";
}

let response = getResponse(8);

/* -------------------------------------------------- */

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log("Signed up successfully");
}

const signInUser = (name: string, email: string, isPaid: boolean = false) => {
  console.log("Signed in successfully");
}

signUpUser("shivek", "shivek@123", false);
signInUser("shivek", "shivek@123");

/* -------------------------------------------------- */

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// Some functions never return a value
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

/* -------------------------------------------------- */

const heros = ['thor', 'spiderman', 'ironman'];

let myHeros = heros.map((hero): string => {
  return `hero is ${hero}`;
})