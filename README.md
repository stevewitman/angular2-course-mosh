
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
