function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let total =
    (meal_cost / 100) * tip_percent +
    (meal_cost / 100) * tax_percent +
    meal_cost;

  total = Math.round(total);

  console.log(total);
}

solve(12, 20, 8);
