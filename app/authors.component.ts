import {Component} from 'angular2/core'

@Component({
  selector: 'authors',
  template: `
  <h2>Authors</h2>
  {{ title }}
  <ul>
    <li *ngFor="#author of authors">{{ author }}</li>
  </ul>
  `,
})
export class AuthorsComponent {
  title = "Title for Authors page";
  authors = ['Kim', 'Mike', 'Paul']
}
