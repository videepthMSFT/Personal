"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imagePath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXyXiDSn8J5wQc8ESXxLOfVS2e-O1tz_vwc4XEiIYsSXFY75-qg';
        this.firstName = 'Tom';
        this.Name = 'Tom';
        this.lastName = 'Hopkins';
        this.classesToApply = "boldClass italicClass";
        this.applyBoldClass = false;
        this.isBold = true;
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent.prototype.onClick = function () {
        console.log('Button clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h1>{{pageHeader ? pageHeader: 'No Header'}}</h1>                \n                <img [src]='imagePath'/>\n                <h2>{{getFullName()}}</h2>\n                </div>\n                <my-employee></my-employee>\n<br/>\n<br/>\n<br/>\n<button class=\"colorClass\" [class]='classesToApply'>My Button</button>\n<br/>\n<br/>\n<button class=\"colorClass\" [class.boldClass]='applyBoldClass'>My Button</button>\n<button style='color:red' [style.font-weight]=\"isBold?'bold':'normal'\">My Buttons</button>\n\n<button (click)='onClick()'>Click Me</button>\n\nName: <input [(ngModel)]='Name'/>\n        <br/>\n        You Entered: {{Name}}\n\n<list-employee>\n</list-employee>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map