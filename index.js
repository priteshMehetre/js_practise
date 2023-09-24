new Date(); //the JavaScript Date() method
//overriding the JavaScript Date() method
function Date(){
this.date = "This method overrides the default constructor of Date class.";
};
var date2 = new Date();
console.log(date2);