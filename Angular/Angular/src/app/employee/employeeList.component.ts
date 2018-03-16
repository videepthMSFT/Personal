
import { Component } from '@angular/core'


@Component({

    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']

})


export class EmployeeListComponent {
    employees: any[];
    employes: any[];

    selectedEmployeeCountRadioButton: string = "All";

    constructor() {
        this.employees = [

            { code: 'emp1', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp2', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp3', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp4', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' }


        ];

        this.employes = [

            { code: 'emp1', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp2', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp3', name: 'Tom', gender: 'Female', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp4', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' }


        ];

    }
    getEmployees(): void {

        this.employees = [

            { code: 'emp1', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp2', name: 'Tom', gender: 'Female', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp3', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp4', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp5', name: 'Tom1', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' }


        ];
    }
    trackByEmpCode(index: number, employee: any): string {


        return employee.code;

    }


    getTotalEmployesCount(): number {

        return this.employes.length;

    }
    getTotalMaleEmployesCount(): number {

        return this.employes.filter(e => e.gender === "Male").length;

    }
    getTotalFemaleEmployesCount(): number {

        return this.employes.filter(e => e.gender === "Female").length;

    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {

        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;

    }

}