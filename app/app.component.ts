import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
        <button (click)="onClick1()">Button 1</button>
        <button (click)="onClick2($event)">Button 2</button>
        <div (click)="onDivClick3()">
            <button (click)="onClick3($event)">Button 3</button>
        </div>
        <div (click)="onDivClick4()">
            <button (click)="onClick4($event)">Button 4</button>
        </div>
   `
})
export class AppComponent { 
    onClick1() {
        console.log("1st button clicked");
    }
    onClick2($event) {
        console.log("2nd button clicked", $event);
    }
    onDivClick3() {
        console.log("handled by div onDivClick3");
    }
    onClick3($event) {
        console.log("3nd button clicked", $event);
    }
    onDivClick4() {
        console.log("handled by div onDivClick4");
    }
    onClick4($event) {
        $event.stopPropagation();
        console.log("4th button clicked", $event);
    }
}
