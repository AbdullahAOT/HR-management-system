'use strict';

//Employee constructor
function Employee(employeeID, firstName, lastName, department, level, imageURL) {
    this.employeeID = employeeID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
}

//function to give prototype of full name for each employee object
Employee.prototype.fullName=function(){
    return (`${this.firstName} ${this.lastName}`);
}

Employee.prototype.calculateSalary=function(){
    if((this.level).toLowerCase()==="junior"){
        this.salary=(Math.random()*(1000-500)+500);
        this.salary=(this.salary-(this.salary*7.5/100));
    }
    else if((this.level).toLowerCase()==="mid-senior"){
        this.salary=(Math.random()*(1500-1000)+1000);
        this.salary=(this.salary-(this.salary*7.5/100));
    }
    else if((this.level).toLowerCase()==="senior"){
        this.salary=(Math.random()*(2000-1500)+1500);
        this.salary=(this.salary-(this.salary*7.5/100));
    }
    else{
        console.error("un-valid level");
    }
    return(this.salary);
}

Employee.prototype.checkDepartmentError=function(){
    if(!(this.department.toLowerCase()==="administration" || this.department.toLowerCase()==="marketing" || 
    this.department.toLowerCase()==="development" || this.department.toLowerCase()==="finance")){
        console.error("un-valid department");
    }
}

Employee.prototype.render=function(){
    var homePageEmployeeTable=document.createElement("table");

    var employeeTableImageRow=document.createElement("tr");

    var imageUrlEntered=document.createElement("img");
    imageUrlEntered.src=this.imageURL;
    imageUrlEntered.textContent=this.imageURL;
    employeeTableImageRow.appendChild(imageUrlEntered);

    var employeeTableInfoRow=document.createElement("tr");

    var tableEmployeeID=document.createElement("td");
    tableEmployeeID.textContent="Id:" + this.employeeID;
    employeeTableInfoRow.appendChild(tableEmployeeID);

    var tableEmployeeFullName=document.createElement("td");
    tableEmployeeFullName.textContent="Name:" + this.fullName();
    employeeTableInfoRow.appendChild(tableEmployeeFullName);

    var tableEmployeeSalary=document.createElement("td");
    tableEmployeeSalary.textContent="Salary:" + Math.floor(this.calculateSalary())+" Dinars";
    employeeTableInfoRow.appendChild(tableEmployeeSalary);

    homePageEmployeeTable.appendChild(employeeTableInfoRow);
    homePageEmployeeTable.appendChild(employeeTableImageRow);

    if (this.department.toLowerCase() == "administration") {
        document.getElementById("AdministrationSection").appendChild(homePageEmployeeTable);
    } else if (this.department.toLowerCase() == "marketing") {
        document.getElementById("MarketingSection").appendChild(homePageEmployeeTable);
    } else if (this.department.toLowerCase() == "development") {
        document.getElementById("DevelopmentSection").appendChild(homePageEmployeeTable);
    } else {
        document.getElementById("FinanceSection").appendChild(homePageEmployeeTable);
    }
}

var IdCounter=1006;

const submitButton=document.getElementById("formSubmit");
submitButton.addEventListener('click', function (event){
    event.preventDefault();
    const firstNameFromSubmit=document.getElementById("firstName").value;
    const lastNameFromSubmit=document.getElementById("lastName").value;
    const departmentFromSubmit=document.getElementById("department").value;
    const levelFromSubmit=document.getElementById("level").value;
    const imageFromSubmit=document.getElementById("imageURL").value;
    const IdFromSubmit=IdCounter+1;
    IdCounter+=1;
    var empAdd= new Employee(IdFromSubmit,firstNameFromSubmit,lastNameFromSubmit,departmentFromSubmit,
    levelFromSubmit,imageFromSubmit);
    empAdd.render();
});

// Create hardcoded employee objects
var emp1 = new Employee(1000, "Ghazi", "Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
var emp2 = new Employee(1001, "Lana", "Ali", "Finance", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
var emp3 = new Employee(1002, "Tamara", "Ayoub", "Marketing", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
var emp4 = new Employee(1003, "Safi", "Walid", "Administration", "Mid-Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
var emp5 = new Employee(1004, "Omar", "Zaid", "Development", "Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
var emp6 = new Employee(1005, "Rana", "Saleh", "Development", "Junior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
var emp7 = new Employee(1006, "Hadi", "Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/amman-prep-d16/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

// Render each employee in a single line
emp1.render(); emp2.render(); emp3.render(); emp4.render(); emp5.render(); emp6.render(); emp7.render();
