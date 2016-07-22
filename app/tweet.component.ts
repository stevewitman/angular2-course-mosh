import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `
<div class="media">
    <div class="media-left">
        <a href="#">
            <img class="media-object" src="{{ data.img_url }}" alt="...">
        </a>
    </div>
    <div class="media-body">
        <span class="media-heading">{{ data.author }}</span><span class="media-handle">{{ data.handle}}</span>
        <p>{{ data.body }}.</p>
        <like [like_count]="data.likes" [liked]="data.liked"></like>
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
    directives: [LikeComponent]
})
export class TweetComponent {
    title = 'Tweets';
    courses;
    constructor() {
        console.log(this.data)
    }
    @Input() data;
}