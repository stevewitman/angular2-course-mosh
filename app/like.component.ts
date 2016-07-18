import {Component, Input} from "angular2/core"

@Component({
    selector: "like",
    template: `
        <i
            class="glyphicon glyphicon-heart"
            [class.highlighted]="liked"
            (click)="onClick()">
        </i>
        <span>{{ like_count }}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }   
        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() like_count = 0;
    @Input() liked = false;

    onClick() {
        this.like_count += this.liked ? -1 : 1;
        this.liked = !this.liked;
    }
}