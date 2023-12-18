interface Car {
  brand: string,
  model: string,
  mileage: number
}

function myCar<T, U extends Car>(price: T, details: U): object {
  return {
    price,
    details
  }
}

myCar(1500000, { brand: "Hyundai", model: "Verna", mileage: 50 });

/* --------------------------------------------- */

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  price: number
}

class Sellable<T> {
  cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}