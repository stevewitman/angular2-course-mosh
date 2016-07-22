import {Component} from 'angular2/core'
import {BootstrapPanel} from './bootstrap.panel.component'


@Component({
    selector: 'my-app',
    directives: [BootstrapPanel],
    template: `
        <bs-panel >
            <div class="heading">This is the Heading</div>
            <div class="body">This in the body!</div>
            <div class="body">... more body</div>
        </bs-panel>
    `
})
export class AppComponent { 

}
