/*
class User {
  email: string //public by default
  public name: string
  private mobileNumber: number
  readonly role: string = "User"

  constructor(email: string, name: string, mobileNumber: number) {
    this.email = email;
    this.name = name;
    this.mobileNumber = mobileNumber;
  }
}
*/

class User {
  readonly role: string = "User"

  constructor(
    public email: string,
    public name: string,
    private mobileNumber: number
  ) { }
}

const newUser = new User("shivek@gmail.com", "shivek", 8457156);
// newUser.mobileNumber //can't access private property outside class
// newUser.role = "Admin" //can't assign to read-only property