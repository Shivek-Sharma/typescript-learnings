// Classes may extend from a base class. A derived class has all the properties 
// and methods of its base class and can also define additional members.

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
d.move(); //Base class method
d.woof(3); //Derived class method