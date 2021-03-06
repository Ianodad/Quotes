import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myanimation', [
      state(
        'small',
        style({
          transform: 'scale(1)'
        })
      ),
      state(
        'large',
        style({
          transform: 'scale(1.2)'
        })
      ),
      transition('small <=>large', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  state: any = 'small';

  animateMe() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}
