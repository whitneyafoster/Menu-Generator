const menu = {
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},
get appetizers() {
  return this._courses.appetizers;
},
get mains() {
  return this._courses.mains;
},
get desserts() {
  return this._courses.desserts;
},
set appetitzers(appetizers) {
  this._courses.appetitizers = appetizers;
},
set mains(mains) {
  this._courses.mains = mains;
},
set desserts(desserts) {
  this._courses.desserts = desserts;
},
get courses() {
  return {
   appetizer: this.appetizers,
   mains: this.mains,
   desserts: this.desserts,
  };
},
addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal() {
  const appetizer = this.getRandomDishFromCourse("appetizers");
  const main = this.getRandomDishFromCourse("mains");
  const dessert = this.getRandomDishFromCourse("desserts");
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
},
};

menu.addDishToCourse("appetizers", "salad", 4.00);
menu.addDishToCourse("appetizers", "wings", 5.00);
menu.addDishToCourse("appetizers", "fries", 4.50);

menu.addDishToCourse("mains", "steak", 10.00);
menu.addDishToCourse("mains", "salmon", 7.00);
menu.addDishToCourse("mains", "chicken", 11.50);

menu.addDishToCourse("desserts", "cheesecake", 4.00);
menu.addDishToCourse("desserts", "ice cream", 5.00);
menu.addDishToCourse("desserts", "brownie", 4.50);

let meal = menu.generateRandomMeal();
console.log(meal);
