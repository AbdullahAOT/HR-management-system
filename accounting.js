'use strict';

var administrationNumberOfEmployees=0;
var administrationTotalSalary=0;
var marketingNumberOfEmployees=0;
var marketingTotalSalary=0;
var developmentNumberOfEmployees=0;
var developmentTotalSalary=0;
var financeNumberOfEmployees=0;
var financeTotalSalary=0;

window.addEventListener("load", function () {
    var numberOfEmployees = parseInt(localStorage.getItem("Employees Number")) || 0;

    for (var i = 1; i <= numberOfEmployees; i++) {
        let employeeToCheck=JSON.parse(localStorage.getItem("Employee " + i));
        if(employeeToCheck.department==="Administration"){
            administrationNumberOfEmployees++;
            administrationTotalSalary+=employeeToCheck.salary;
        }
        else if(employeeToCheck.department==="Marketing"){
            marketingNumberOfEmployees++;
            marketingTotalSalary+=employeeToCheck.salary;
        }
        else if(employeeToCheck.department==="Development"){
            developmentNumberOfEmployees++;
            developmentTotalSalary+=employeeToCheck.salary;
        }
        else{
            financeNumberOfEmployees++;
            financeTotalSalary+=employeeToCheck.salary;
        }
    }
    renderAdministration();
    renderMarketing();
    renderDevelopment();
    renderFinance();
    renderTotalDepartments();
});

let calculateAverageSalary=function(number,totalSalary){
    return(Math.floor(totalSalary/number));
}

// 1
let renderAdministration=function(){
    var administrationTable=document.createElement("table");

    var row1=document.createElement("tr");
    var row1Data=document.createElement("td");
    row1Data.textContent="Administration Department";
    row1.appendChild(row1Data);

    var row2=document.createElement("tr");
    var row2Data=document.createElement("td");
    row2Data.textContent="Number of Employees: " + administrationNumberOfEmployees;
    row2.appendChild(row2Data);

    var row3=document.createElement("tr");
    var row3Data=document.createElement("td");
    row3Data.textContent="Total of Salaries: " + administrationTotalSalary;
    row3.appendChild(row3Data);

    var row4=document.createElement("tr");
    var row4Data=document.createElement("td");
    row4Data.textContent="Average of Salaries: " + calculateAverageSalary(administrationNumberOfEmployees,administrationTotalSalary);
    row4.appendChild(row4Data); 

    administrationTable.appendChild(row1);
    administrationTable.appendChild(row2);
    administrationTable.appendChild(row3);
    administrationTable.appendChild(row4);

    document.getElementById("accountingAdministration").appendChild(administrationTable);
}

// 2
let renderMarketing=function(){
    var administrationTable=document.createElement("table");

    var row1=document.createElement("tr");
    var row1Data=document.createElement("td");
    row1Data.textContent="Marketing Department";
    row1.appendChild(row1Data);

    var row2=document.createElement("tr");
    var row2Data=document.createElement("td");
    row2Data.textContent="Number of Employees: " + marketingNumberOfEmployees;
    row2.appendChild(row2Data);

    var row3=document.createElement("tr");
    var row3Data=document.createElement("td");
    row3Data.textContent="Total of Salaries: " + marketingTotalSalary;
    row3.appendChild(row3Data);

    var row4=document.createElement("tr");
    var row4Data=document.createElement("td");
    row4Data.textContent="Average of Salaries: " + calculateAverageSalary(marketingNumberOfEmployees,marketingTotalSalary);
    row4.appendChild(row4Data); 

    administrationTable.appendChild(row1);
    administrationTable.appendChild(row2);
    administrationTable.appendChild(row3);
    administrationTable.appendChild(row4);

    document.getElementById("accountingMarketing").appendChild(administrationTable);
}

// 3
let renderDevelopment=function(){
    var administrationTable=document.createElement("table");

    var row1=document.createElement("tr");
    var row1Data=document.createElement("td");
    row1Data.textContent="Development Department";
    row1.appendChild(row1Data);

    var row2=document.createElement("tr");
    var row2Data=document.createElement("td");
    row2Data.textContent="Number of Employees: " + developmentNumberOfEmployees;
    row2.appendChild(row2Data);

    var row3=document.createElement("tr");
    var row3Data=document.createElement("td");
    row3Data.textContent="Total of Salaries: " + developmentTotalSalary;
    row3.appendChild(row3Data);

    var row4=document.createElement("tr");
    var row4Data=document.createElement("td");
    row4Data.textContent="Average of Salaries: " + calculateAverageSalary(developmentNumberOfEmployees,developmentTotalSalary);
    row4.appendChild(row4Data); 

    administrationTable.appendChild(row1);
    administrationTable.appendChild(row2);
    administrationTable.appendChild(row3);
    administrationTable.appendChild(row4);

    document.getElementById("accountingDevelopment").appendChild(administrationTable);
}

// 4
let renderFinance=function(){
    var administrationTable=document.createElement("table");

    var row1=document.createElement("tr");
    var row1Data=document.createElement("td");
    row1Data.textContent="Finance Department";
    row1.appendChild(row1Data);

    var row2=document.createElement("tr");
    var row2Data=document.createElement("td");
    row2Data.textContent="Number of Employees: " + financeNumberOfEmployees;
    row2.appendChild(row2Data);

    var row3=document.createElement("tr");
    var row3Data=document.createElement("td");
    row3Data.textContent="Total of Salaries: " + financeTotalSalary;
    row3.appendChild(row3Data);

    var row4=document.createElement("tr");
    var row4Data=document.createElement("td");
    row4Data.textContent="Average of Salaries: " + calculateAverageSalary(financeNumberOfEmployees,financeTotalSalary);
    row4.appendChild(row4Data); 

    administrationTable.appendChild(row1);
    administrationTable.appendChild(row2);
    administrationTable.appendChild(row3);
    administrationTable.appendChild(row4);

    document.getElementById("accountingFinance").appendChild(administrationTable);
}

// 5
let renderTotalDepartments=function(){
    var administrationTable=document.createElement("table");

    var row1=document.createElement("tr");
    var row1Data=document.createElement("td");
    row1Data.textContent="All Departments";
    row1.appendChild(row1Data);

    var row2=document.createElement("tr");
    var row2Data=document.createElement("td");
    row2Data.textContent="Total Number of Employees: " + (administrationNumberOfEmployees+marketingNumberOfEmployees
        +developmentNumberOfEmployees + financeNumberOfEmployees);
    row2.appendChild(row2Data);

    var row3=document.createElement("tr");
    var row3Data=document.createElement("td");
    row3Data.textContent="Total Salaries for all departments: " + (administrationTotalSalary+marketingTotalSalary+
        developmentTotalSalary+financeTotalSalary);
    row3.appendChild(row3Data);

    var row4=document.createElement("tr");
    var row4Data=document.createElement("td");
    row4Data.textContent="Average salaries for all departments: " + calculateAverageSalary(administrationNumberOfEmployees+marketingNumberOfEmployees
        +developmentNumberOfEmployees + financeNumberOfEmployees , administrationTotalSalary+marketingTotalSalary+
        developmentTotalSalary+financeTotalSalary);
    row4.appendChild(row4Data); 

    administrationTable.appendChild(row1);
    administrationTable.appendChild(row2);
    administrationTable.appendChild(row3);
    administrationTable.appendChild(row4);

    document.getElementById("accountingTotal").appendChild(administrationTable);
}