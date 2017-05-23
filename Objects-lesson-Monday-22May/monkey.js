var Monkey = function (name, species, foodsEaten) {
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten;
  var foodsArray = [];
  foodsArray.push(foodsEaten);

this.eatSomething = function(thingAsString) {
  this.thingAsString = thingAsString;
  foodsArray.push(thingAsString);
  console.log("Hi, my name is " + name + " and I am a " + species + "! I have eaten " + foodsArray + "!");
}

}

var monkey1 = new Monkey("Bobby", "forest monkey", "banana");
var monkey2 = new Monkey("Sherry", "jungle monkey", "apple");
var monkey3 = new Monkey("Tarzan", "desert monkey", "sand");

console.log(monkey1.eatSomething("peanuts"));
