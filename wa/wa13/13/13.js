//problem 1
let company_employees = 
    '{ "employees" : [' +
    '{ "firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligible":"true"},' +
    '{ "firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500" , "raiseEligible":"true"},' +
    '{ "firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligible":"false"},' +
    '{ "firstName":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600" , "raiseEligible":"false"}]}';
let company_data = JSON.parse(company_employees);

let employeeOne = company_data.employees[0];
let employeeTwo = company_data.employees[1];
let employeeThree = company_data.employees[2];
console.log("Problem 1");
console.log("Employee 1:");
console.log(employeeOne);
console.log("Employee 2:");
console.log(employeeTwo);
console.log("Employee 3:");
console.log(employeeThree);


//problem 2
let company = {"name":"Tech Stars","website": "www.techstars.site", "employees": company_data.employees};
let companyEmployees = company_data.employees;
console.log("Problem 2");
console.log(company);
for(let i = 0; i < company['employees'].length;i++){
    console.log(company['employees'][i].firstName)
}

// problem 3
let employeeFour = company_data.employees[3];
console.log("Problem 3");
console.log("new employee 4");
console.log(employeeFour);

//problem 4
let salaryTotal = 0; 
for(let i = 0; i < company['employees'].length; i++){
    let salaryAmount = parseInt(company['employees'][i].salary);
    salaryTotal += salaryAmount;
}

console.log("Problem 4");
console.log("Total salary of all employees: " + salaryTotal);

// problem 5 
console.log("problem 5");
for(let i = 0; i < company['employees'].length; i++){
    if (company['employees'][i].raiseEligible == 'true'){
       salaryAmount = parseInt(company['employees'][i].salary); 
       raiseAmount = salaryAmount * .1;
       salaryAmount += raiseAmount;
       console.log(company['employees'][i].firstName + " recived an raise of "+ raiseAmount+ " their new salary is "+ salaryAmount);
    }
    else{
        console.log(company['employees'][i].firstName + " was not eligible for a raise");
    }
}

// problem 6
console.log("problem 6")

let workFromHome = ['Anna', 'Sam'];
for(let i = 0; i < company['employees'].length; i++){
    if (workFromHome.includes(company['employees'][i].firstName)){
        company['employees'][i].wfh = 'true';
    }
    else{
        company['employees'][i].wfh = 'false';
    }
}
for(let i = 0; i < company['employees'].length; i++){
    console.log("name: "+company['employees'][i].firstName + " working from home: "+ company['employees'][i].wfh);
}
