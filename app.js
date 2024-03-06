// Chapter 9-11

// Q1
// var userCity = prompt("Please enter your city here")

// if (userCity.toLowerCase() === "karachi") {
//     var welcome = "Welcome to city of life"
//     document.write("<h1>"+welcome+"</h1>")
// }
// else if (userCity.toLowerCase() === "lahore") {
//     var welcome2 = "Welcome to city of Daddu"
//     document.write("<h1>"+welcome2+"</h1>")
// }
// else if (userCity.toLowerCase() === "quetta") {
//     var welcome3 = "Welcome to city of Akhroots"
//     document.write("<h1>"+welcome3+"</h1>")
// }
// else if (userCity.toLowerCase() === "islamabad") {
//     var welcome4 = "Welcome to city of Totla seth"
//     document.write("<h1>"+welcome4+"</h1>")
// }
// else {
//     var welcome5 = "Please enter city of Pakistan Only!"
//     document.write("<h1>"+welcome5+"</h1>")
// }

// Q2
// var UserGender = prompt("Please Enter Your Gender(M/F)");
//     var convertUserGender = UserGender.toLowerCase();
// if (convertUserGender === "male" || convertUserGender === "m") {
//         alert("Good Morning Sir");
//     }
//     else if (convertUserGender === "female" || convertUserGender === "f") {
//         alert("Good Morning Ma'am");
//     }
//     else {
//         alert("This input is not valid please enter correct gender (M/F)");
//     }

// Q3
// var signalColor = prompt("Please enter the color of the road traffic signal:")
// var convertSignalColor = signalColor.toLowerCase()

// if (signalColor ==="red"){
//     alert ("Stop Signal Activated! Please Stop!");
// }else if (signalColor==="yellow"){
//     alert ("Ready to move! Prepare for go!");
// }else if(signalColor==="green"){
//     alert ("Go Signal Activated! You can go now!");
// }else{
//    alert ("Invalid Color! Please enter either 'Red' 'Yellow' or 'Green'");
// }

//Q4
// var carFuel = +prompt("Please enter your remaining fuel in your car")

// if (carFuel > 0.25) {
//     var fuelOk = "Your Fuel Level is Good, Keep Driving";
//     alert(fuelOk)
// } else if (carFuel <= 0.25) {
//     var fuelNotOk = "Please refill the fuel in your car"
//     alert(fuelNotOk)
// }
// else {
//     alert('Invalid Input! Please enter valid number')
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// Q6
// var subject1 = parseFloat(prompt("Enter Subject 1 Marks:"));
// var subject2 = parseFloat(prompt("Enter Subject 2 Marks:"));
// var subject3 = parseFloat(prompt("Enter Subject 3 Marks:"));
// var totalMarks = parseFloat(prompt("Enter Total Marks:"));
// var marksObtained = subject1 + subject2 + subject3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade;

// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// var remarks = (percentage >= 40) ? 'Pass' : 'Fail';

// document.write('Total Marks: ' + totalMarks + '<br>');
// document.write('Marks Obtained: ' + marksObtained + '<br>');
// document.write('Percentage: ' + percentage.toFixed(2) + '%<br>');
// document.write('Grade: ' + grade + '<br>');
// document.write('Remarks: ' + remarks);

// Q7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
// }

// Q8
// var userNumber = parseInt(prompt("Enter a number:"));

// if (userNumber % 3 === 0) {
//     document.write(userNumber + " is divisible by 3.");
// } else {
//     document.write(userNumber + " is not divisible by 3.");
// }

// Q9
// var userNumber = parseInt(prompt("Enter a number:"));

// if (userNumber % 2 === 0) {
//     document.write(userNumber + " is an even number.");
// } else {
//     document.write(userNumber + " is an odd number.");
// }

// Q10
// var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The weather today is normal.");
// } else if (temperature > 20) {
//     document.write("Today's weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so cool.");
// } else {
//     document.write("It is very cold outside.");
// }

// Q11
// Pending

// Chapter 12 & 13
// Q1
// var inputChar = prompt("Enter a character (number or string):");
// var charCode = inputChar.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     document.write(inputChar + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     document.write(inputChar + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     document.write(inputChar + " is a lowercase letter.");
// } else {
//     document.write(inputChar + " is not a number or a letter.");
// }

// Q2
// var firstInteger = parseInt(prompt("Enter the first integer:"));
// var secondInteger = parseInt(prompt("Enter the second integer:"));

// if (firstInteger > secondInteger) {
//     document.write("The larger integer is: " + firstInteger);
// } else if (secondInteger > firstInteger) {
//     document.write("The larger integer is: " + secondInteger);
// } else {
//     document.write("The two integers are equal.");
// }

// Q3
// var userNumber = parseFloat(prompt("Enter a number:"));

// if (userNumber > 0) {
//     document.write(userNumber + " is a positive number.");
// } else if (userNumber < 0) {
//     document.write(userNumber + " is a negative number.");
// } else {
//     document.write("The number is zero.");
// }

// Q4
// var inputChar = prompt("Enter a character (string of length 1):");
// var charLower = inputChar.toLowerCase();

// if (charLower === 'a' || charLower === 'e' || charLower === 'i' || charLower === 'o' || charLower === 'u') {
//     document.write("The character '" + inputChar + "' is a vowel.");
// } else {
//     document.write("The character '" + inputChar + "' is not a vowel.");
// }

// Q5
// var correctPassword = "yourSecretPassword";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     document.write("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Incorrect password.");
// }

// Q6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);