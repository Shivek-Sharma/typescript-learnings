// Generics allow creating 'type variables' which can be used to create classes, functions 
// and type aliases that don't need to explicitly define the types that they use.

// We can also create Arrays like this in TypeScript
const scores: Array<number> = [14, 25, 12, 8];
const names: Array<string> = ["ramesh", "krish", "shivam"];

/* --------------------------------------------- */

function methodOne(val: number | string): number | string {
  return val;
}

// Not recommended
function methodTwo(val: any): any {
  return val;
}

// Generics with functions
function methodThree<Type>(val: Type): Type {
  return val;
}

methodThree(45);
methodThree("45");

/* --------------------------------------------- */

function methodFour<T>(val: T): T {
  return val;
}

interface User {
  id: number
  name: string
  email: string
}

methodFour<User>({ id: 8, name: "shivek", email: "shivek@gmail.com" });

/* --------------------------------------------- */

// Generics with functions and arrays
function searchProduct<T>(products: T[]): T {
  // return "HP Pavillion" //this will give error because 'T' has dynamic type
  return products[2];
}

searchProduct(["Iphone 13", "Oppo Reno", "HP Pavillion", "Sony PS5"]);

/* --------------------------------------------- */

// Generics with arrow functions and arrays
const searchMobiles = <T>(products: Array<T>): Array<T> => {
  // return ["Iphone 13", "Oppo Reno"] //this will give error because 'T' has dynamic type
  return [products[0], products[1]];
}

searchMobiles(["Iphone 13", "Oppo Reno", "HP Pavillion", "Sony PS5"]);