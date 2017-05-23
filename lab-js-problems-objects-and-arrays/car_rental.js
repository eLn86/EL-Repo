// Customer Object
var Customer = function (customerInfo) {
  // ** your code here**
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPrice = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;

  this.quotePrice = function(rentalDuration) {
  return this.rentalPricePerDay * rentalDuration;
  };

  this.reserve = function(customer, rentalDuration) {
    if (this.available) {
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }
    else {
      return false;
    }
  };

  this.return = function() {
    switch (this.available) {
      case true:
      return "Sorry, this car has already been returned."
      break;
      case false:
      this.available = true;
      this.customer = null;
      this.rentalDuration = null;
      break;
      default:
      return "error, please try again"
    }
  }

};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // **your code here**
  this.addCar = function(carObj) {
    this.carObj = carObj;
    if(this.getCar(carObj.id) === carObj){
      console.log("ID already exists");
    }
    else {
      this.cars.push(carObj);
      console.log("Car " + carObj.producer + " " + carObj.model + "," + "ID: " + carObj.id + " added to warehouse");
    }
  }

    this.addCustomer = function(customerObj) {
    this.customerObj = customerObj;
    if(this.getCustomer(customerObj.id) === customerObj){
      console.log("ID already exists");
    }
    else {
      this.customers.push(customerObj);
      console.log("Customer " + customerObj.name + "," + "ID: " + customerObj.id + " added to warehouse");
    }
  }

  this.removeCar = function(carID) {
    if(this.findCarIndex(carID) >= 0){
      this.cars.splice(this.findcarIndex(carID),1);
      console.log("Car deleted");
    }
    else {
      console.log("Car not found");
    }
  }

  this.removeCustomer = function(customerID) {
    if(this.findCustomerIndex(customerID) === true){
      this.customers.splice(this.findCustomerIndex(customerID), 1);
      console.log("Customer deleted");
    }
    else {
      console.log("Customer not found");
    }
  }

  this.availableCars = function() {
    return this.cars.filter(function (car) {
      return car.available ? true : false;
    });

  }


  this.rentCar = function(customerID, rentalDuration) {
    var availableCars = this.availableCars();
    if (availableCars === null){
      console.log("All our cars have been rented.");
    }
    else {
      if(this.getCustomer(customerID).id === customerID) {
        this.getCustomer(customerID).carRented = availableCars[0];
        availableCars[0].reserve(this.getCustomer(customerID).id , rentalDuration);
        console.log("The car has been reserved");
      }

      else {
        console.log("Please provide a valid customerID");
      }
    }
}

  this.returnCar = function(customerID) {
    if(this.getCustomer(customerID) === true) {
      this.customers[this.getCustomer(customerID)].return();
      this.customers[this.getCustomer(customerID)].carRented = null;
      console.log("Thank you for using our service");
    }

    else {
      console.log("Please provide a valid customerID");
    }
  }

  this.totalRevenue = function() {
    return this.cars.reduce(function (a,b){
      return a + (b.rentalPrice * b.rentalDuration);
    }, 0);
};

};


var customerInfo = {
  id: "001",
  name: "Sherman"
};

var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carInfo2 = {
  id: "002",
  producer: "Toyota",
  model: "Pruis",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
console.log(customerA);
console.log(vendor.totalRevenue());
