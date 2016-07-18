import {Component} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
        <span class="glyphicon" [class.glyphicon-star-empty]="!isFavorite" [class.glyphicon-star]="isFavorite" (click)="onClick()"></span>
    `
})

export class FavoriteComponent {
    isFavorite = false;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}

