// An abstract method is one that hasn’t had an implementation provided. 
// These members must exist inside an abstract class, which cannot be directly instantiated.

abstract class Car {
  constructor(
    public name: string,
    public type: string
  ) { }

  abstract getReviews(): void //must be implemented in child class

  // We can only do function declaration in interface, not function implementation/definition
  // In abstract class, we can do both
  changeCarType(newType: string): void {
    this.type = newType;
  }
}

class SportsCar extends Car {
  constructor(
    public name: string,
    public type: string,
    protected cc: number
  ) {
    super(name, type)
  }

  getReviews(): void {
    console.log("Fetching reviews from database");
  }
}

// Cannot create an instance/object of an abstract class
// const newCar = new Car("Ferrari SF90", "Sports")

const newCar = new SportsCar("Ferrari SF90", "Sports", 3990);
newCar.getReviews();
newCar.changeCarType("Luxury");