import {Component} from 'angular2/core'
import {LikeComponent} from './like.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template: `
    <div *ngFor="#tweet of tweets">
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{ tweet.img_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <span class="media-heading">{{ tweet.title }}</span><span class="media-handle">{{ tweet.handle}}</span>
                <p>{{ tweet.body }}.</p>
                <like [like_count]="0"></like>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .media {
            padding: 10px;
        }
        .media-object {
            border-radius: 20px;
        }
        .media-heading {
            font-size: 24px;
            padding-right: 12px;
        }
        .media-handle {
            font-size: 24px;
            color: #ccc;
        }
    `],
    directives: [LikeComponent],
    providers: [TweetService],
})
export class TweetComponent {
    title = 'Tweets';
    courses;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}