function Car(make, model, year, color, state, previousOwners) {
  this.year = year;
  this.state = 'off';
  this.previousOwners = "";
  this.currentOwner = "Manufacturer";
  this.passengers = "";
  //this.sale = "Charlie";
}



//function PreviousOwners( )

//Car.prototype.previousOwners = function( )
  


//var off = new Car ('off');


Car.prototype.sale = function(newOwner){
this.newOwner = "Charlie";
this.previousOwners = ["Manufacturer"]
this.currentOwner = "Charlie";
};

Car.prototype.paint = function(newColor){
  this.color = "Blue";
};

Car.prototype.start = function(state){
  this.state = "on";
}

Car.prototype.off = function(state){
  this.state = "off";
}

Car.prototype.pickUp = function(passengers) {




  if (this.state === "on")  {
    this.passengers = ["john"];
}




}

//Car.prototype.pickUp = function () {
  //return ("start" + "passengers");
//}

module.exports=Car;