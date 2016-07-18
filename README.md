
### app.component.ts
```typescript
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <button class="btn btn-primary" [class.disabled]="!isActive1">Submit</button>
        <button class="btn btn-primary" [class.disabled]="!isActive2">Submit</button>
    `
})
export class AppComponent { 
    isActive1 = true;
    isActive2 = false;
}
```
![Alt text](/Users/sw/angular2/angular2-course/screenshots/01.png)

## Style Binding
### app.component.ts
```typescript
import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
        <button class="btn btn-primary"
        [style.backgroundColor]="isActive1 ? 'blue' : 'gray'">Submit</button>
        <button class="btn btn-primary"
        [style.backgroundColor]="isActive2 ? 'blue' : 'gray'">Submit</button>
   `
})
export class AppComponent { 
    isActive1 = true;
    isActive2 = false;
}
```
![Alt text](/Users/sw/angular2/angular2-course/screenshots/02.png)


## Event Binding
### app.component.ts
```typescript
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
```
![Alt text](/Users/sw/angular2/angular2-course/screenshots/03.png)
