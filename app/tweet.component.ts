import {Component} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `
    <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="http://lorempixel.com/100/100/" alt="...">
            </a>
        </div>
        <div class="media-body">
            <span class="media-heading">Woodward</span><span class="media-handle">@woodward</span>
            <p>Jump with the best of them.</p>
            <like></like>
        </div>
    </div>
    `,
    styles: [`
        .media-object {
            border-radius: 10px;
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

}