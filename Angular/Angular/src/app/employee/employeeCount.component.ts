import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = "All";
    @Output()
    countRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    onRadioButtonChange() {

        this.countRadioButtonChange.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}