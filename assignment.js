//Assignment-2 1st Problem
/*
function triangle(a, b, c) {
    if (a === b && b === c) {
        console.log("It is a equilateral triangle")
    } else if (a === b || b === c || c === a) {
        console.log("It is a isosceles triangle(2 sides equal )")

    } else {
        console.log("It is scalane triangle")
    }
}
let x = 4
let y = 7
let z = 5
triangle(x, y, z)*/

//2nd problem
/*a = 70
switch (true) {
    case (a >= 90 && a <= 100):
        {
            console.log("S Grade")
            break;
        }
    case (a <= 90 && a >= 80):
        {
            console.log("A Grade")
            break;
        }
    case (a <= 80 && a >= 70):
        {
            console.log("B Grade")
            break;
        }
    case (a <= 70 && a >= 60):
        {
            console.log("C Grade")
            break;
        }
    case (a <= 60 && a >= 50):
        {
            console.log("D Grade")
            break;
        }
    case (a <= 50 && a >= 40):
        {
            console.log("E Grade")
            break;
        }
    case (a <= 40 && a >= 0):
        {
            console.log("Fail")
            break;
        }
    default:
        console.log('INVALID SCORE')
}*/
//3rd Problem
/*
function numbers(a) {
    let sum = 0;
    for (num = 0; num < a; num++) {
        if (num % 3 == 0 || num % 5 == 0) {
            sum += num
        }
    }
    console.log("The sum of multiples of 3 and 5 is: ", sum)
}
numbers(1000)*/
//4th Problem
function prime(a, b) {
    for (let i = a; i <= b; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
console.log("The prime numbers in the given range is : ")
prime(1, 10)