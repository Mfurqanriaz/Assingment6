//  Chapter 21 - 25


//Task #1
// var firstName = prompt("Enter Your First Name","first name");
// var lastName =  prompt("Enter Your Last Name","last name");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName); 


//Task #2
// var myPhone = window.prompt("Enter Your Favourite Phone", "my favourite phone is");
// var len = myPhone.length;
// document.write("My Favourite Phone Is " + myPhone);
// document.write("<br>Length Of String Is: " + len);


//Task #3
// var word = "Pakistan";
// document.write("String is " + word + "<br>");
// for (var i = 0; i < word.length; i++) {
//     if (word.slice(i, i + 1) === "n") {
//         document.write("Index of 'n' is " + i);
//     }
// }


//Task #4
// var word1 = "Hello World";
// document.write("String " + word1 + "<br>");
// var find = word1.lastIndexOf("l");
// document.write("Last Index Is " + find);


//Task $5
// var word = "Pakistani";
// document.write("String Is " + word + "<br>");
// document.write("Character at Index 3 is " + word[3]);


//Task #6
// var firstName = prompt("Enter Your First Name","first name");
// var lastName =  prompt("Enter Your Last Name","last name");
// var fullName = firstName.concat(lastName);
// alert("Hello! " + fullName); 


//Task #7
// var city = "Karachi";
// document.write("Before: " + city + "<br>");
// for (var i = 0; i < city.length; i++) {
//     if (city.slice(i, i + 5) === "Hyder") {
//         city = city.slice(0, i) + "Islam" + city.slice(i + 5);
//         document.write("After Replacement " + city);
//     }
// }


//Task #8
// var message = "Tom and Jerry are best friends. They play cricket and football together.";
// document.write("Current Message : " + message + "<br>");
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);

//     }
// }
// document.write("After Replacement : " + message);


//Task #9
// var string = "522";
// console.log(string);
// var number = parseInt(string);
// console.log("Value: " +number);


//Task #10
// var user = window.prompt("Enter Some Thing In Lower Case", "Enter Here");
// var upperCase = user.toUpperCase();
// window.alert(upperCase);


//Task #11
// var user = prompt("Enter Some Thing", "Enter Here");
// var firstChar = user.slice(0,1);
// var rem = user.slice(1);
// firstChar = firstChar.toUpperCase();
// user = firstChar.concat(rem);
// alert(user);


//Task #12
// var mul;
// var num = 45.32;
// var cal = num.toString();
// var store;
// for (var i = 0; i < cal.length; i++) {
//     if (cal.slice(i, i + 1) === ".") {
//         store = cal.slice(i + 1);
//     }
// }
// var temp = store.length;
// temp = Math.pow(10, temp);
// num *= temp;
// document.write("Result = " + num);


//Task #13
// var input = prompt("Ener Something", "Enter Here!");
// for(var i =0;i<input.length;i++){
//     if(input.slice(i,i+1)=== "@" ||input.slice(i,i+1)=== ","||input.slice(i,i+1)=== "!"||input.slice(i,i+1)=== "."){
//         alert("Please Enter a valid user Name...");
//     }
// }


//Task #14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = window.prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'am", "Enter Here");
// var orderr = order.toLowerCase();
// var temp = 0;
// for (var i = 0; i < A.length; i++) {
//     if(orderr === A[i]){
//         window.alert(order + " is avaliable at index " + i + " in our Bakery");
//         break;
//     }
//     temp++
// }

// if(temp === 5){
//     window.alert("We are Sorry! " + order + " is not avaliable in our Bakery");
// }

//Task #15
// var password = prompt("Enter Password!", "enter here!");
// if (password.slice(0, 1) <= 48 && password.slice(0, 1) <= 57) {
//     alert("Password Can not begin with a number");
//     alert("Please Enter A Valid Password..");
// }
// else if (password.length < 6) {
//     alert("Password Must be greater than 6");
// }
// else {
//    alert("Welcome!");
// }


//Task #16
// var university = "University Of Pakistan";
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>")
// }


//Task #17
// var userInput = window.prompt("Enter Here!");
// document.write("User Input = " + userInput + "<br>");
// document.write("Last Character Of Input = " + userInput[userInput.length -1]);


//Task #18
// var string = "The quick brown fox jumps over the lazy dog";
// document.write("String : " + string + "<br>");
// var value = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         value++;
//     }
// }
// if(value >= 2){
//     document.write("There are " + value + " Occurrence(s) of word 'the'");
// }
// else{
//     document.write("There is " + value + " Occurrence of word 'the'");
// }


//  Chapter 26 - 30



//Task #1
// var inputNumber = prompt("Enter Positive Integer","Enter Here!");
// document.write("Number : " + inputNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNumber));


//Task #2
// var inputNegativeNumber = prompt("Enter Negative Integer","Enter Here!");
// document.write("Number : " + inputNegativeNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNegativeNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNegativeNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNegativeNumber));


//Task #3
// var absoluteValue = prompt("Enter Value");
// document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));


//Task #4
// var generateRandom = parseInt((Math.random() * 6) + 1);
// document.write("Random Dice Number Is : " + generateRandom);


//Task # 5
// var toss = parseInt((Math.random() * 2) + 1);
// document.write(toss + "<br>");
// switch (toss) {
//     case 1:
//         document.write("Random coin Value : Tails");
//         break;
//     case 2:
//         document.write("Random coin Value : Heads");
//         break;
// }


//Task #6
// var numbers = parseInt((Math.random() * 100) + 1);
// document.write("Random numbers between 1 and 100 : " + numbers);


//Task #7
// var weight = window.prompt("Enter Weight");
// var store;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 3) === "kgs") {
//         store = Number(weight.split("kgs",1));
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 2) === "kg") {
//         store = weight.split("kg", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 9) === "kilograms" || weight.slice(i, i + 8) === "kilogram") {
//         store = weight.split("kilograms", 1);
//         store = weight.split("kilogram", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
// }


//Task #8
// var secretNumber = parseInt((Math.random() * 10) + 1);
// var guess = Number(prompt("Guess a number between 1 - 10","Try your luck"));
// if(guess === secretNumber){
//     alert("Congratulations!!!");
// }
// else{
//     window.alert("Try Again!");
// }