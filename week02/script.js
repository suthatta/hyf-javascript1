//1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
//remove comma from myString 
let newString = myString.replace(/[\s,]+/g,' ').trim();
console.log(newString);

//2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//add turtle to the end of Array
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
//add meerkat between blowfish and capricorn
favoriteAnimals.splice(1, 0, "meerkat");
console.log("favoriteAnimals new value should be= ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
//delete giraffe
delete favoriteAnimals[3];
console.log(favoriteAnimals);
//find index of meerkat
console.log("The item you are looking for is at index: ");
console.log(favoriteAnimals.indexOf('meerkat'));

//more Javascript

//Create a function that takes 3 arguments and returns the sum of the these arguments.
let sum =function (num1, num2, num3){
    return sum = (num1+num2+num3);
  }
  console.log("The sum of tree arguments = ", sum(1,2,3));

//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
let colorCar = function(color){
  return "a " + color +" car";
}
console.log(colorCar("red"));

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let myPerson = {
  firstName:"Johny", 
  lastName:"Dan", 
  age:45, 
  eyeColor:"blue",
  country: "UK",
  marry: true
};

let showObject = function(obj, objName) {
    let result = ``;
    for (let i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
console.log(showObject(myPerson, "myPerson"));

//Create a function named vehicleType that receives a color, and a code, 
//1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

let vehicleType = function(color, code){
let myResult="a " + color + "";
  if (code===1){
   myResult= myResult + " car "; 
  }
  else {
  myResult= myResult + " motorbike "; 
  }
  return myResult;
}
console.log(vehicleType("blue", 2));

//Can you write the following without the if statement, but with just as a single line with console.log(...);?
//*if (3 === 3) {console.log("yes");} else {console.log("no");}

console.log(3===3);

//Create a function called vehicle, like before, but takes another parameter called age, 
//so that vehicle("blue", 1, 5) prints 'a blue used car'
let vehicleType2 = function(color2, code2, age){
  let myResult2="a " + color2 + "" + "";
  if (age <= 3) {
    myResult2= myResult2 + " new "; 
    }else {
      myResult2= myResult2 + " used ";
    }

  if (code2===1){
    myResult2= myResult2 +"" + " car "; 
  }
  else {
    myResult2= myResult2 +"" + " motorbike "; 
  }
  return myResult2;
  }
  console.log(vehicleType2("blue", 1, 5));


//Make a list of vehicles
let myVehicles =[" motorbike", " caravan"," bike"," tuktuk"," boxbike"];
//get the third element from that list?
console.log(myVehicles[2]);

//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
let vehicleType3 = function(color3, code3, age3){
  let myResult3="a " + color3 + "" + "";
  if (age3 <= 3) {
    myResult3= myResult3 + " new "; 
    }else {
      myResult3= myResult3 + " used ";
    }

  if (code3===1){
    myResult3= myResult3 + myVehicles[0]; 
  }
  else if (code3===2){
    myResult3= myResult3 + myVehicles[1]; 
  }
  else if (code3==3) {
    myResult3= myResult3 + myVehicles[2];
  }
  else if (code3==4) {
    myResult3= myResult3 + myVehicles[3];
  }
  else {
    myResult3= myResult3 + myVehicles[4];
  }
  return myResult3;
  }
  console.log(vehicleType3("green", 3, 1));

  //Use the list of vehicles to write an avertisement
  //let myVehicles =[" motorbike", " caravan"," bike"," tuktuk"," boxbike"];

  let adds= function(){
    let advertisementText="Amazing Joe's Garage, we service ";
    for (let i=0; i < myVehicles.length; i++){
      if (i=== myVehicles.length -1){
        advertisementText+= " and "+ myVehicles[i] + "s ";
      }
      else {
        advertisementText+=  myVehicles[i] + "s ";
        }
    }
    return advertisementText;
  }
 console.log(adds());
//What if you add one more vehicle to the list, can you have that 
//added to the advertisement without changing the code for question 10?
myVehicles.push("3-wheels-bike");
//console.log(myVehicles);
console.log(adds());
//Create an empty object.
let myEmtyObject={};
//object contains the teacher
let myTeachers={name: "Anna",detail:{subject: " Swedish as a second language ",
language: "Swedish",
age:45, 
eyeColor:"blue",
country: "UK",
marry: true}, 
name2:"Stev",
detail:{subject: " Swedish as a second language ",
language: "Swedish"}} 
console.log(myTeachers);
  
//Write some code to test two arrays for equality using == and ===. Test the following:
let arrayX = [1, 2, 3];
let arrayY = [1, 2, 3];
let arrayZ = arrayY;
console.log("X = Y is ", arrayX===arrayY);
console.log("Y = Z is ", arrayY===arrayZ);
console.log("X = Z is ", arrayX===arrayZ);
console.log("Z = Y is ", arrayZ===arrayY);
console.log("X=Y=Z is ", arrayX===arrayY && arrayX===arrayZ);
// check values
console.log("values X = Y is ", arrayX.values===arrayY.values);
console.log("values Y = Z is ", arrayY.values===arrayZ.values);
console.log("values X = Z is ", arrayX.values===arrayZ.values);
console.log("Values Z = Y is ", arrayZ.values===arrayY.values);
console.log("values X = Y = Z is ", arrayX.values===arrayY.values && arrayX.values===arrayZ.values);
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/
//Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
//let o3;
let o3 = o2;
//let o2 = o3;

//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2.coffee="black";
console.log("o1 = ", o1);
console.log("o2 = ", o2);
console.log("o3 = ", o3);
//change o1
o1.tea="green";
console.log("o1 = ", o1);
console.log("o2 = ", o2);
console.log("o3 = ", o3);

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log("The order  (o3 = o2 or o2 = o3) is matter");

//What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;//string
console.log('bar Code return : '+ typeof (typeof(bar)));

let x='6';
console.log('X Code return : ' + typeof(x));