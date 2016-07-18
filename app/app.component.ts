import {Component} from 'angular2/core';
import {LikeComponent} from './like.component'
@Component({
    selector: 'my-app',
    template: `
        <like [like_count]="7"></like>
    `,
    directives: [LikeComponent]
})
export class AppComponent { 

}
