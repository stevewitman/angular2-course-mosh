import {Component} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'


@Component({
    selector: 'my-app',
    template: `
    <!-- use ngIf to show to create or destroy an element in the dom to free up resources -->
        <div *ngIf="tweets.length>0" *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
        <div *ngIf="tweets.length==0">
            You don't have any tweets yet.
        </div>
    <!-- bind to the hidden property to keep the element (and children) in the dom but hidden -->
        <div [hidden]="courses.length == 0">
            List of courses
        </div>
        <div [hidden]="courses.length > 0">
            You don't have any courses yet.
        </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent { 
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

    courses = [];

}
