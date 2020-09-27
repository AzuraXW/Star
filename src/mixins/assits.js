export function oneOf (value, array) {
  return array.find(val => {
    return val === value;
  });
}