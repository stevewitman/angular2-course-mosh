import {Component} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'


@Component({
    selector: 'my-app',
    template: `
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'" href="#">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'" href="#">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent { 
   viewMode = 'map';

}
