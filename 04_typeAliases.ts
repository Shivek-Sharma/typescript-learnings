type User1 = {
  name: string;
  email: string;
  isActive: boolean
}

function createUser(user: User1): User1 {
  console.log("User got registered in database successfully");
  return user;
}

const myUser = createUser({ name: "shivek", email: "shivek@mail.com", isActive: true });

/* -------------------------------------------------- */

type User2 = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number // ? -> optional
}

const newUser: User2 = {
  _id: "4855",
  name: "shivek",
  email: "shivek@mail.com",
  isActive: true
}

newUser.email = "shivek@coder.com"
// newUser._id = "7448" // can't change read-only property

/* -------------------------------------------------- */
// Using predefined type aliases

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate