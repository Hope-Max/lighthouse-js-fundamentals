const lastIndexOf = function(anyArray, anyElement) {
  let index;
  if (anyArray.indexOf(anyElement) === -1) {
    index = -1;
  } else {
    for (let i = 0; i < anyArray.length; i++) {
      if (anyArray[i] === anyElement) {
        index = i;
      }
    }
  }
  return index;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([3], 3));

console.log(lastIndexOf([0, 0, 0, 0, 5, 0], 5));