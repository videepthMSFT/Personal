"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.selectedEmployeeCountRadioButton = "All";
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
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp1', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp2', name: 'Tom', gender: 'Female', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp3', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp4', name: 'Tom', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' },
            { code: 'emp5', name: 'Tom1', gender: 'Male', annualSalary: 5550, DOB: '07/07/1988' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployesCount = function () {
        return this.employes.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployesCount = function () {
        return this.employes.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployesCount = function () {
        return this.employes.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map