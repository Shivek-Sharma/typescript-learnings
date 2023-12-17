let response: number | string = 200;
response = 400;
response = "400 Not Found";

/* -------------------------------------------------- */
// Array

const numData: number[] = [1, 2, 3];
const strData: string[] = ["1", "2", "3"];
const mixData: (number | string)[] = [1, 2, "3"];

/* -------------------------------------------------- */

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "window";
// seatAllotment = "crew" //not allowed

/* -------------------------------------------------- */

type User = {
  name: string;
  id: number;
}

type Admin = {
  username: string;
  id: number;
}

let newUser: User | Admin = { name: "Shivek Sharma", id: 788 };
newUser = { username: "shivek", id: 788 };

/* -------------------------------------------------- */

function getNameFromDB(id: number | string) {
  if (typeof id === "number") {
    id = id.toString();
  }

  const username = "ramesh"; //fetched from database
  console.log(`Name is ${username} of id: ${id}`);
}

getNameFromDB("785");
getNameFromDB(785);