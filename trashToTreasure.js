const smartGarbage = function(trash, bins) {
  const keysOfbinsArr = Object.keys(bins);
  for (let i = 0; i < keysOfbinsArr.length; i++) {
    if (keysOfbinsArr[i] === trash) {
      bins[keysOfbinsArr[i]]++;
    }
  }
  return bins;
}
console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));