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
    var homePageEmployeeTableRow=document.createElement("tr");

    var tableEmployeeID=document.createElement("td");
    tableEmployeeID.textContent=this.employeeID;
    homePageEmployeeTableRow.appendChild(tableEmployeeID);

    var tableEmployeeFullName=document.createElement("td");
    tableEmployeeFullName.textContent=this.fullName();
    homePageEmployeeTableRow.appendChild(tableEmployeeFullName);

    var tableEmployeeSalary=document.createElement("td");
    tableEmployeeSalary.textContent=Math.floor(this.calculateSalary());
    homePageEmployeeTableRow.appendChild(tableEmployeeSalary);

    document.getElementById("employeeTableHomePage").appendChild(homePageEmployeeTableRow);
}

var emp1 = new Employee(1000, 'Ghazi', 'Samer', 'Administration', 'Senior', 'example.com/ghazisamer.jpg');
var emp2 = new Employee(1001, 'Lana', 'Ali', 'Finance', 'Senior', 'example.com/lanaali.jpg');
var emp3 = new Employee(1002, 'Tamara', 'Ayoub', 'Marketing', 'Senior', 'example.com/tamaraayoub.jpg');
var emp4 = new Employee(1003, 'Safi', 'Walid', 'Administration', 'Mid-Senior', 'example.com/safiwalid.jpg');
var emp5 = new Employee(1004, 'Omar', 'Zaid', 'Development', 'Senior', 'example.com/omarzaid.jpg');
var emp6 = new Employee(1005, 'Rana', 'Saleh', 'Development', 'Junior', 'example.com/ranasaleh.jpg');
var emp7 = new Employee(1006, 'Hadi', 'Ahmad', 'Finance', 'Mid-Senior', 'example.com/hadiamad.jpg');

emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();


