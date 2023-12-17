interface User {
  readonly userId: number
  username: string
  email: string
  authToken?: number
}

const newUser: User = { userId: 148, username: "shivek", email: "shivek@gmail.com" }