const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

const reversedIngredients = ingredients.reverse();
console.log(reversedIngredients);
for (m = 0; m < reversedIngredients.length; m++) {
  console.log(reversedIngredients[m]);
}