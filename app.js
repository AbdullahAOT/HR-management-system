'use strict';

// Employee constructor
function Employee(employeeID, firstName, lastName, department, level, imageURL) {
    this.employeeID = employeeID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = null; // Initialize salary property as null
}

// Function to give prototype of full name for each employee object
let fullName = function (employeeFullName) {
    return `${employeeFullName.firstName} ${employeeFullName.lastName}`;
}

function calculateSalary (employeeToCalculateSalary) {
        if ((employeeToCalculateSalary.level).toLowerCase() === "junior") {
            employeeToCalculateSalary.salary = Math.random() * (1000 - 500) + 500;
            employeeToCalculateSalary.salary -= employeeToCalculateSalary.salary * 7.5 / 100;
        } else if ((employeeToCalculateSalary.level).toLowerCase() === "mid-senior") {
            employeeToCalculateSalary.salary = Math.random() * (1500 - 1000) + 1000;
            employeeToCalculateSalary.salary -= employeeToCalculateSalary.salary * 7.5 / 100;
        } else if ((employeeToCalculateSalary.level).toLowerCase() === "senior") {
            employeeToCalculateSalary.salary = Math.random() * (2000 - 1500) + 1500;
            employeeToCalculateSalary.salary -= employeeToCalculateSalary.salary * 7.5 / 100;
        } else {
            console.error("un-valid level");
        }
    return employeeToCalculateSalary.salary;
}

let render = function (employeeToRender) {
    var homePageEmployeeTable = document.createElement("table");

    var employeeTableImageRow = document.createElement("tr");

    var imageUrlEntered = document.createElement("img");
    imageUrlEntered.src = employeeToRender.imageURL;
    imageUrlEntered.textContent = employeeToRender.imageURL;
    employeeTableImageRow.appendChild(imageUrlEntered);

    var employeeTableInfoRow = document.createElement("tr");

    var tableEmployeeID = document.createElement("td");
    tableEmployeeID.textContent = "Id:" + employeeToRender.employeeID;
    employeeTableInfoRow.appendChild(tableEmployeeID);

    var tableEmployeeFullName = document.createElement("td");
    tableEmployeeFullName.textContent = "Name:" + fullName(employeeToRender);
    employeeTableInfoRow.appendChild(tableEmployeeFullName);

    var tableEmployeeSalary = document.createElement("td");
    tableEmployeeSalary.textContent = "Salary:" + employeeToRender.salary + " Dinars";
    employeeTableInfoRow.appendChild(tableEmployeeSalary);

    homePageEmployeeTable.appendChild(employeeTableInfoRow);
    homePageEmployeeTable.appendChild(employeeTableImageRow);

    if (employeeToRender.department.toLowerCase() == "administration") {
        document.getElementById("AdministrationSection").appendChild(homePageEmployeeTable);
    } else if (employeeToRender.department.toLowerCase() == "marketing") {
        document.getElementById("MarketingSection").appendChild(homePageEmployeeTable);
    } else if (employeeToRender.department.toLowerCase() == "development") {
        document.getElementById("DevelopmentSection").appendChild(homePageEmployeeTable);
    } else {
        document.getElementById("FinanceSection").appendChild(homePageEmployeeTable);
    }
}

var IdCounter = parseInt(localStorage.getItem("Id Counter")) || 1006;

const submitButton = document.getElementById("formSubmit");
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const firstNameFromSubmit = document.getElementById("firstName").value;
    const lastNameFromSubmit = document.getElementById("lastName").value;
    const departmentFromSubmit = document.getElementById("department").value;
    const levelFromSubmit = document.getElementById("level").value;
    const imageFromSubmit = document.getElementById("imageURL").value;
    const IdFromSubmit = IdCounter + 1;
    IdCounter += 1;
    localStorage.setItem("Id Counter",IdCounter);
    var empAdd = new Employee(IdFromSubmit, firstNameFromSubmit, lastNameFromSubmit, departmentFromSubmit,
        levelFromSubmit, imageFromSubmit);
    storeEmployee(empAdd);
    render(empAdd);
});

var actualIndexOfEmployees = parseInt(localStorage.getItem("Employees Number")) || 0;
function storeEmployee(employeeToStore) {
    employeeToStore.salary=Math.floor(calculateSalary(employeeToStore));
    actualIndexOfEmployees += 1;
    localStorage.setItem("Employee " + (actualIndexOfEmployees), JSON.stringify(employeeToStore));
    localStorage.setItem("Employees Number", actualIndexOfEmployees);
}

// Create hardcoded employee objects
if (actualIndexOfEmployees == 0) {
    var emp1 = new Employee(1000, "Ghazi", "Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
    var emp2 = new Employee(1001, "Lana", "Ali", "Finance", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
    var emp3 = new Employee(1002, "Tamara", "Ayoub", "Marketing", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
    var emp4 = new Employee(1003, "Safi", "Walid", "Administration", "Mid-Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
    var emp5 = new Employee(1004, "Omar", "Zaid", "Development", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
    var emp6 = new Employee(1005, "Rana", "Saleh", "Development", "Junior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
    var emp7 = new Employee(1006, "Hadi", "Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

    storeEmployee(emp1);
    storeEmployee(emp2);
    storeEmployee(emp3);
    storeEmployee(emp4);
    storeEmployee(emp5);
    storeEmployee(emp6);
    storeEmployee(emp7);
}

// Store all hardcoded employee objects in local storage

window.addEventListener("load", function () {
    // Retrieve the number of employees stored
    var numberOfEmployees = parseInt(localStorage.getItem("Employees Number")) || 0;

    // Iterate over each employee key using for loop
    for (var i = 1; i <= numberOfEmployees; i++) {
        // Retrieve the employee object from localStorage
        var employeeKey = "Employee " + i;
        var employeeJSON = localStorage.getItem(employeeKey);

        // Parse the employee JSON string into an object
        var employee = JSON.parse(employeeJSON);

        // Render the employee
        render(employee);
    }
});