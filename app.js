// CHAPTER 9 & 10

// Q 1

var inputCity = prompt("Please enter your city: ");  //get user's city from the browser

if (inputCity == "karachi") {
    document.write("Welcome the city of the lights " + "<br>")
} else {
    document.write("Oops :: Please try again " + "<br>")
};


// Q 2

var inputGender = prompt("Are you a male or female?");     //get gender info from user 

if (inputGender == "male") {
    document.write("<br/>Good Morning Sir: " + "<br>")   //display message according to users gender
} else if (inputGender == "female") {
    document.write("<br/>Good Afternoon Madam: " + "<br>")
} else {
    document.write("<br/>Hello There! " + "<br>")      //default greeting for any other case
}


// Q 3

var inputColors = prompt("Enter traffic signal colors : Like : (red,yellow,green)").toLowerCase();

if (inputColors == "red") {
    document.write("Must Stop " + "<br>");
} else if (inputColors == "yellow") {
    document.write("Reay to move " + "<br>");
} else if (inputColors == "green") {
    document.write("Move Now " + "<br>");
} else {
    document.write("Invalid Colors Entered !!! " + "<br>");
};


// Q 4

var liers = prompt("Enter fuels liters (1 - 15)")

if (liers <= 15 && liers >= 10) {
    document.write("Trip enjoy: fuel tank is full " + "<br>")
} else if (liers <= 9 && liers >= 3) {
    document.write("Fuel Tank half: " + "<br>")
} else if (liers <= 2) {
    document.write("Alert : Fuel Tank Is almost empty:" + "<br>")
} else {
    alert("Please enter valid number of lit res.");
}


// Q 5

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true ");
}
else if (c === 13) {
    alert("condition 2 is true");
}
else if (++c < 14) {
    alert("condition 3 is true");
}
else if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

var car = "car"
var cat = "cat"

if (car < cat) {
    alert("car is smaller than cat");
}

// Q 6

var subject1 = +(prompt("Enter subject 1 marks:"));
var subject2 = +(prompt("Enter subject 2 marks:"));
var subject3 = +(prompt("Enter subject 3 marks:"));
var totalMarks = +(prompt("Enter total marks:"));

document.write(" Subject1 Marks : " + "<b>" + subject1 + "</b>" + "<br>")
document.write(" Subject2 Marks : " + "<b>" + subject2 + "</b>" + "<br>")
document.write(" Subject3 Marks : " + "<b>" + subject3 + "</b>" + "<br> <br>")

document.write("TotalMarks : " + "<b>" + totalMarks + "</b>" + "<br> <br>")


if (subject1 == "" && subject2 == "" && subject3 == "" && totalMarks == "") {
    alert("Please enter valid numbers for marks.");
}

var totalObtainedMarks = subject1 + subject2 + subject3;
document.write("TotalObtainedMarks : " + "<b>" + totalObtainedMarks + "</b>" + "<br>")

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage <= 89 && percentage >= 80) {
    grade = 'A';
} else if (percentage <= 79 && percentage >= 70) {
    grade = 'B';
} else if (percentage <= 69 && percentage >= 60) {
    grade = 'C';
} else if (percentage <= 59 && percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

document.write("Percentage : " + "<b>" + percentage.toFixed(2) + " % </b>" + " <br>")
document.write("Grade : " + "<b>" + grade + "</b>");

// Q 7

var number = 8;
var inputNumber = +prompt("Enetr number 1 - 10");

if (inputNumber >= 11) {
    document.write("Sorry : invalid number")
} else if (inputNumber == number) {
    document.write("Congratulations ! you win.")
} else if (inputNumber == ++number) {
    document.write("“Close enough to the correct answer.”")
} else if (inputNumber >= 11) {
    document.write("Sorry : invalid number")
} else {
    document.write("Oops !! Please Try again")
}

// Q 8

var number = +prompt("Enter a number: ");

if (number % 3 === 0) {
    document.write(number + " is divisible by 3.");
} else {
    document.write(number + " is not divisible by 3.");
}

// Q 9

var number = +prompt("Enter a number: ");

if (number % 2 === 0) {
    document.write(number + " is an even number.");
} else {
    document.write(number + " is an odd number.");
}


// Q 10

var temprature = +prompt("Enter temprature degree")
document.write("temprature : " + "<b>" + temprature + "</b> <br>")

var degree;
if (temprature >= 40) {
    degree = '“OMG! temprature is so hot”';
} else if (temprature <= 39 && temprature >= 30) {
    degree = '“It is too hot outside.”';
} else if (temprature <= 29 && temprature >= 20) {
    degree = '“The Weather today is Normal.”';
} else if (temprature <= 19 && temprature >= 10) {
    degree = '“Today’s Weather is cool.”';
} else if (temprature <= 10) {
    degree = '“OMG! Today’s weather is so Cool.”';
}

document.write("<b>" + degree + "</b>")

// Q 11

var firstNumber = +prompt("Enter your first number: ")
var secondNumber = +prompt("Enter your second number: ")

var opretors = prompt("Choose only mathematics operators : LIKE (+ , - , * , / , %)")


if (firstNumber !== "" && secondNumber !== "" && opretors !== "") {

    if (opretors == "+" || opretors == "-" || opretors == "*" || opretors == "/" || opretors == "%") {


        document.write("FirstNumber : " + "<b>" + firstNumber + "</b> <br> <br>")
        document.write("SecondNumber : " + "<b>" + secondNumber + "</b> <br> <br>")
        document.write("Opretors : " + "<b>" + opretors + "</b> <br> <br>")


        if (opretors == "+") {
            var addition = "Addition  " + firstNumber + " + " + secondNumber + " = " + "<b>" + (firstNumber + secondNumber) + "</b> <br>"
            document.write(addition)

        } else if (opretors == "-") {
            var subtraction = "Subtraction  " + firstNumber + " - " + secondNumber + " = " + "<b>" + (firstNumber - secondNumber) + "</b> <br>"
            document.write(subtraction)

        } else if (opretors == "*") {
            var multyplication = "Multyplication  " + firstNumber + " * " + secondNumber + " = " + "<b>" + (firstNumber * secondNumber) + "</b> <br>"
            document.write(multyplication)

        } else if (opretors == "/") {
            var division = "Division  " + firstNumber + " / " + secondNumber + " = " + "<b>" + (firstNumber / secondNumber).toFixed(2) + "</b> <br>"
            document.write(division)

        } else if (opretors == "%") {
            var person = "Person  " + firstNumber + " / " + secondNumber + " % " + "<b>" + (firstNumber % secondNumber).toFixed(2) + "</b> <br>"
            document.write(person)
        }

    } else {
        document.write("Invalid operation. Please enter one of: +, -, *, /, %")
    }

} else {
    document.write("Please fill all inputs")
}