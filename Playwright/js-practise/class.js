// You have an employee class with name and salary. Sort the employees based on salary. If two employees have the same salary then they should be sorted alphabetically

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

const employees = [
    new Employee("John", 1000),
    new Employee("Jane", 2000),
    new Employee("Bob", 1000),
    new Employee("Alice", 3000)
];

function sortSal(employees) {
    const sortedEmployees=employees.sort((a,b)=>{
        if(a.salary === b.salary) {
            return a.name.localeCompare(b.name);
        }
        else{
            return a.salary - b.salary;
        }
    })
    return sortedEmployees;

    // for (let i = 0; i < sortedEmployees.length - 2; i++) {
    //     for (let j = i + 1; j < i.length; j++) {
    //         if (employees[i].salary == employees[j].salary) {
    //             sortedEmployees[i].name.localeCompare(sortedEmployees[j].name);
    //         }
    //     }
    // }
}

sortSal(employees);
console.log(employees);
