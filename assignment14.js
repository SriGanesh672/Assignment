//1. Write a JavaScript program to:
let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]
//a) filter employees according to department = IT
employees.forEach(employee => {
    if(employee.department==='IT')
    {
        console.log(employee)
    }
});
//b) filter employees who earn a salary < 65000
console.log("Filtering employess who earn <65000")
employees.forEach(employee=>
    {
        if(employee.Salary<65000)
        {
            console.log(employee)
        }
    })
//2. Write a JavaScript program to filter the hospitals according to:
let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability": "Yes"
    },
    {
        "id": 2,
        "name": "Hospital B",
        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
    },
    {
        "id": 3,
        "name": "Hospital C",
        "location": "Pune",
        "noOfBeds": 350,
        "availability": "Yes"
    }
]
//a) Number of Beds > 200
console.log()
hospitals.forEach(hospital=>
    {
        if(hospital.noOfBeds>200)
        {
            console.log(hospital)
        }
    })
//b) Availability of Beds = Yes
console.log()
console.log("Availability of Beds = Yes")
hospitals.forEach(hospital=>
    {
        if(hospital.availability==="yes")
        {
            console.log(hospital)
        }
    })
//c) Location = Pune
console.log()
console.log(" Location = Pune")
hospitals.forEach(hospital=>
    {
        if(hospital.location==="Pune")
        {
            console.log(hospital)
        }
    })