console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let lastName;
var age;

// Exercise 2
const firstName = "Ashton";
lastName = "Dorough";
age = 31;

console.log("The person who wrote the code for this app is " + firstName + " " + lastName + ". He is " + age + " years old.");

// Exercise 3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

console.log("This was created using " + language + ", which was created in the year " + createdYear + ".");
if (isCaseSensitive)
    console.log(language + " is a case sensitive language.")
else
    console.log(language + " is not a case sensitive language.")

// Exercise 4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";

console.log("I ordered a " + selectedSize + " sized shirt at the price of " + price + ".\n"
    + "They said they had " + stock + " in stock, which I knew to be " + !inStock + ".\n"
    + "It was marked " + salePercentage + "% off, and they said the sale was ongoing, but I knew that was " + isOnSale + ".");

// Exercise 5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;

console.log("It is " + hasRead + " that I have read the book '" + title + "' by " + author + ". "
    + "I am re-reading it. It has " + pageCount + " pages and I am currently on page " + bookmark + ".");
