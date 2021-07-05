const howManyHundreds = function(num) {
  const container = Math.floor(num / 100);
  return container;
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));