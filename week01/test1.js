//console.log('Hi');

//1."Hello World!" 
/*Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish*/
console.log("Hello World" +' // English');
console.log("halo dunia" +' // Indoniska');
console.log("Sawad dee" +' // Thailandska');


//2. console.log('I'm awesome');
console.log("I'm awesome");
console.log('I\'m awesome');
// 3
let x;
console.log("the value of x will be: whateverYouThinkItWillLog");
console.log("the value of my variable x will be: ", (x));
x=5;
console.log("the value of x will be: whateverYouThinkItWillLog");
console.log("the value of my variable x will be: ", (x));
console.log("Type of X : ", (typeof(x)));

// 4. Y 
let y;
console.log("the value of my string will be: whateverYouThinkItWillLog ");
console.log(typeof(y));
y = 'I-Write-String';
console.log('The value of Y is = ', (y));
console.log("the value of my string will be: whateverYouThinkItWillLog");
console.log(typeof(y));
// 5 round number

let z= 7.25;
console.log('Print z = ', z);
aa = z;
console.log('Print aa = ', Math.round(aa));
x = Math.max(aa, z);
console.log('Print highest value = ', x);

//6 Array
let myArray=[];
console.log("the value of my Array will be: whateverYouThinkItWillLog");
console.log(typeof(myArray));
myArray = ['Cat', 'Dog', 'Pig'];
console.log('Print myFavoritAnimals = ', myArray);
//add Daan's favorite animal ('baby pig)
//myArray[3]= "Daan's favorite animal ('baby pig')";
myArray.push("baby pig");
console.log('Print myFavoritAnimals = ', myArray);



//7 more string

let myString = "this is a test";
console.log(myString);
//Find String length
stringLength = myString.length;
console.log('Pring Strings length = ', stringLength);

//8 
text = 'Text String';
number = 123456;
array = ['array 1', 'array 2'];
boolean = true;
console.log("The value of my variable text is: " + text);
console.log("The value of my variable number is: " + number);
console.log("The value of my variable array is: " + array);
console.log("The value of my variable boolean is: " + boolean);
console.log("the value of my Array will be: whateverYouThinkItWillLog");
console.log("Type of variable text is: " + typeof(text));
console.log("Type of variable number is: " + typeof(number));
console.log("Type of variable array is: " + typeof(array));
console.log("Type of variable boolean is: " + typeof(boolean));
// compare type of 
if (typeof(text)=== typeof(number)===typeof(array)===typeof(boolean)){
    console.log('SAME TYPE');
}
else {
    console.log('Type of all valiables Not even close ');
};

//9
console.log('9.-------------------');
x= 7;
console.log('Print x value = ', x);
x= x % 3;
console.log(' 7 % 3 =[7/3= 2.1] then the Value of 7%3 = 1');
console.log('Print 7 % 3 = ', x);
//10
console.log('10.-------------------');
let person ={firstname: "Anna", lastName:"Svensson", age:45, workstatus:true};
console.log(person);
//Infinity
let maxNumber = Math.pow(10, 1000); // max positive number 10*10(1000times)
console.log('MaxNumber is = ',maxNumber);
if (maxNumber === Infinity) {
  console.log("Let's call it Infinity! ");
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0




  /*  let a = isFinite(123);
    let b = isFinite(-1.23);
    let c = isFinite(5-2);  
    let d = isFinite(0);
    let e = isFinite("123");
    let f = isFinite("Hello");
    let g = isFinite("2005/12/12");
    let result = a +b +c +d+e+f+g;
    console.log('Print result ', result);*/

// Example
