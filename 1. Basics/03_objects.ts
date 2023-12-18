const user = {
  name: "shivek",
  email: "shivek@gmail.com",
  isActive: true
}

function createUser({ name: string, isPaid: boolean }): void {
  console.log("User created successfully");
}

// This will give an error because the function is not expectiong email which is being passed here
// createUser({ name: "shivek", isPaid: false, email: "shivek@gmail.com" })

const newUser = { name: "shivek", isPaid: false, email: "shivek@gmail.com" }
// This is not giving any error, weird behaviour of object
createUser(newUser);

/* -------------------------------------------------- */

function createCourse(): { title: string, price: number } {
  return { title: "reactjs", price: 499 };
}

let myCourse = createCourse();