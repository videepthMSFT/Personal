import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader ? pageHeader: 'No Header'}}</h1>                
                <img [src]='imagePath'/>
                <h2>{{getFullName()}}</h2>
                </div>
                <my-employee></my-employee>
<br/>
<br/>
<br/>
<button class="colorClass" [class]='classesToApply'>My Button</button>
<br/>
<br/>
<button class="colorClass" [class.boldClass]='applyBoldClass'>My Button</button>
<button style='color:red' [style.font-weight]="isBold?'bold':'normal'">My Buttons</button>

<button (click)='onClick()'>Click Me</button>

Name: <input [(ngModel)]='Name'/>
        <br/>
        You Entered: {{Name}}

<list-employee>
</list-employee>
`

})

   
export class AppComponent {

    pageHeader: string = "Employee Details";
    imagePath: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXyXiDSn8J5wQc8ESXxLOfVS2e-O1tz_vwc4XEiIYsSXFY75-qg';

    firstName: string = 'Tom';
    Name: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {

        return this.firstName +' '+ this.lastName;
    }

    classesToApply: string = "boldClass italicClass";
    applyBoldClass: boolean = false;
    isBold: boolean = true;

    onClick(): void {

        console.log('Button clicked');
    }
}