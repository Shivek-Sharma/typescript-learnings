class User {
  private courseCount = 1

  constructor(
    public email: string,
    public name: string,
    private mobileNumber: number
  ) { }

  get getCollegeMail(): string {
    return `${this.name}@nsut.ac.in`
  }

  get getCourseCount(): number {
    return this.courseCount;
  }

  set setCourseCount(value: number) // setter can't have a return type
  {
    if (value <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this.courseCount = value;
  }
}

const newUser = new User("shivek@gmail.com", "shivek", 8457156);
newUser.getCollegeMail;
newUser.setCourseCount = 5;