const judgeVegetable = function(vegetables, metric) {
  let indexOfHig = [0];
  let valueOfHig = vegetables[0][metric]
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > valueOfHig) {
      indexOfHig = [];
      indexOfHig.push(i);
      valueOfHig = vegetables[i][metric];
    } else if (vegetables[i][metric] === valueOfHig) {
      indexOfHig.push(i);
    }
  } 
  for (let index of indexOfHig) {
    console.log(vegetables[index]['submitter'])
  } 
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 10,
    plumpness: 3
  }
]
const metric = 'redness';

judgeVegetable(vegetables, metric);

