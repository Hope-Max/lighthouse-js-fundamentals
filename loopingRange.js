const range = function(start, end, step) {
  const times = Math.floor((end - start) / step); 
  let num = start;
  let numList = [];

  if (start === undefined || end === undefined || step === undefined) {
    return numList;
  } else if (start > end) {
    return numList;
  } else if (step <= 0) {
    return numList;
  } else {
    numList.push(num);
    for (let i = 1; i <= times; i++) {
      num += step;
      numList.push(num);
    }
    return numList;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
