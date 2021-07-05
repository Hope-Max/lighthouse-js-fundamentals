const concat = function(arrayOne, arrayTwo) {
  let arrayFinal = [];
  
  for (let i of arrayOne) {
    arrayFinal.push(i);
  }

  for (let j of arrayTwo) {
    arrayFinal.push(j);
  }
  arrayFinal.sort((a, b) => {
    return (a - b);
  })
  return arrayFinal;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]));
console.log(concat([5, 10], []));