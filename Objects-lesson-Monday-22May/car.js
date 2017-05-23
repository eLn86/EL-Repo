var Car = function(color, engine) {
  //Public
  this.color = color;

  //Private
  var engine= engine;
  var fuel = 0;

  var useFuel = function(){
    fuel--;
  }

this.addFuel = function(x) {
    fuel += x;
}

this.start = function() {
  useFuel();

  if(fuel > 0) {
    console.log("Wrom Wrom");
  }
  else {
    console.log("Fuel empty");
  }
}

}

var newCar = new Car("red", "Super engine");
newCar.addFuel(3);
newCar.start();
