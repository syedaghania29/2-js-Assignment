////////_______CHAPTER 2 STARTS______////////

// //Question 1
// let username;

// //Question 2
// let myName ="Syeda Ghania Hussain";

// //Question 3
// let message =" Hello World";
// alert(message);

// //Question 4
// let name ="Jhone Doe";
// let age ="15 years old";
// let course ="Certificate Moblie Application Development";
// alert(name);
// alert(age);
// alert(course);

// //Question 5
// let word ="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(word);

// //Question 6
// let email ="example@example.com";
// alert("My email address is " + email);

// //Question 7
// let book ="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);
 
// //Question 8
// document.write("Yah! I can write HTML content through JavaScript");

// //Question 9
// let design ="----------❛ ━━･❪ ❁ ❫ ･━━ ❜----------";
// alert(design);
// document.write(design);

////////______CHAPTER 2 ENDS______///////////

////////______CHAPTER 3 STARTS_____////////

// //Question 1
// let age =18;
// alert("I am " + age + " years old");

// //Question 2
// let visitCount = 14;
// alert("You have visited this site " + visitCount + " times");

// //Question 3
// let birthYear = 1990;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear );

// //Question 4
// let visitorName ="John Doe";
// let productTitle ="T-shirt";
// let quantity =5;
// document.write("<br>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle +
//      "(s)</b> on XYZ Clothing store.");

////////________CHAPTER 3 ENDS______////////

/////////_______CHAPTER 4 STARTS_____////////

// //Question 1
// let name, age, gender;

// //Question 2
// Legal variable names
// let myName;
// let age;
// let my_full_name;
// let myFullName;
// let $price;

// Illegal variable names
// let full name;
// let 678name;
// let full-name;
// let @gmail;

// //Question 3
// document.write("<h3>Rules for naming JS variables</h3>");
// document.write("Variable names can only contain _ , $ and letters. For example $my_1stVariable<br>");
// document.write("Variable names must begin with a letter , $ or _. For example $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");

////////______CHAPTER 4 ENDS______////////

///////_______CHAPTER 5 STARTS_____////////

// //Question 1
// let num1 = 3;
// let num2 = 5;

// let sum = num1 + num2;

// document.write("Sum of 3 and 5 is " + sum);

// //Question 2
// let num1 = 10;
// let num2 = 5;

// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;
// let modulus = num1 % num2;

// document.write("Subtraction is " + subtraction + "<br>");
// document.write("Multiplication is " + multiplication + "<br>");
// document.write("Division is " + division + "<br>");
// document.write("Modulus is " + modulus);

// //Question 3
// let num;
// document.write("Value after variable declaration is " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// let remainder = num % 3;
// document.write("The remainder is: " + remainder);

// //Question 4
// let ticketPrice = 600;
// let numberOfTickets = 5;
// let totalCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// //Question 5
// let number = 4;
// document.write("Table of " + number + "<br>");
// document.write(number + " x 1 = " + number * 1 + "<br>");
// document.write(number + " x 2 = " + number * 2 + "<br>");
// document.write(number + " x 3 = " + number * 3 + "<br>");
// document.write(number + " x 4 = " + number * 4 + "<br>");
// document.write(number + " x 5 = " + number * 5 + "<br>");
// document.write(number + " x 6 = " + number * 6 + "<br>");
// document.write(number + " x 7 = " + number * 7 + "<br>");
// document.write(number + " x 8 = " + number * 8 + "<br>");
// document.write(number + " x 9 = " + number * 9 + "<br>");
// document.write(number + " x 10 = " + number * 10);

// //Question 6
// let celsius = 25;
// let fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// let fahrenheitTemp = 70;
// let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
// document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

// //Question 7
// let priceItem1 = 650;
// let priceItem2 = 100;
// let quantityItem1 = 3;
// let quantityItem2 = 7;
// let shippingCharges = 100;
// let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);

// //Question 8
// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// //Question 9
// let usDollars = 10;
// let saudiRiyals = 25;
// let totalCurrency = (usDollars * 104.80) + (saudiRiyals * 28);
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + totalCurrency);

// //Question 10
// let number = 10;
// let result = ((number + 5) * 10) / 2;
// document.write("Final result is " + result);

// //Question 11
// let currentYear = 2026;
// let birthYear = 2000;
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;
// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("They are either " + age1 + " or " + age2 + " years old.");

// //Question 12
// let radius = 20;
// let circumference = 2 * 3.142 * radius;
// let area = 3.142 * radius * radius;
// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// //Question 13
// let favoriteSnack = "chocolate chip";
// let currentAge = 15;
// let maximumAge = 65;
// let amountPerDay = 3;
// let totalSnacks = (maximumAge - currentAge) * amountPerDay;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favoriteSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maximumAge + "<br>");
// document.write("Amount of snacks per day: " + amountPerDay + "<br>");
// document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " 
//     + maximumAge);