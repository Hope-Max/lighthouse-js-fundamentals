const stations = [
  ['Big Bear Donair', 10, 'restaurant'], 
  ['Bright Lights Elementary', 50, 'school'], 
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(choices) {
  let nameList = [];
  for (let i = 0; i < choices.length; i++) {
    if ((choices[i][1] >= 20) && (choices[i][2] === 'school' || choices[i][2] === 'community centre')) {
      nameList.push(choices[i][0]);
    }
  }
  return nameList;
}
console.log(chooseStations(stations));