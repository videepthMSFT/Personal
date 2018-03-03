import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader}}</h1>                
                </div>
                <my-employee></my-employee>`
})

   
export class AppComponent {

    pageHeader: string = "Employee Details";

}