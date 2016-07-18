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
