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

};


module.exports=Car;