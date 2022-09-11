//Problem-1
// program to check leap year
function Year(a) {
    if ((0 == a % 4) && (0 != a % 100) || (0 == a % 400)) {
        console.log("The given year", a, "is a leap year ");
    } else {
        console.log("The given year ", a, " is not a leap year");
    }
}
Year(2021);
//problem-2
//Fahrenheit to celsius
let cel = 32
let Fah = 131

function Fahrenheit() {
    b = cel * 1.8 + 32
    console.log("Celsius", cel, " To Fahrenheit is : ", b)
}

function celsius(c) {
    d = (Fah - 32) / 1.8
    console.log("Fahrenheit", Fah, " To Celsius is : ", d)
}
celsius()
Fahrenheit()
    //Problem-3
    //Factorial of the number
function fact(a) {
    let b = 1
    if (a === 0) {
        console.log("The factorial of 0 is  1")
    } else {
        for (i = 1; i <= a; i++) {
            b *= i
        }
    }
    console.log("The factorial of the number is ", b)
}
fact(1)