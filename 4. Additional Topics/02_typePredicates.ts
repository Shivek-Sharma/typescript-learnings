type Fish = { swim: () => void }
type Bird = { fly: () => void }

// Here return type is: 'true' or 'false', which is not helpful
/*
function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim() !== undefined;
}
*/

// Here return type is: 'Fish' or 'Bird'
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim() !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return `${pet} food`;
  } else {
    return `${pet} food`;
  }
}