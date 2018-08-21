import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css'],
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
export class FormQuoteComponent implements OnInit {
  showDetails: boolean;
  state: any = 'small';

  newQuote = new Quote(0, '', '', '  ', 0, 0, new Date());
  @Output()
  addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '  ', 0, 0, new Date());
  }

  toogleForm() {
    this.showDetails = !this.showDetails;
  }
  animateMe() {
    this.state = this.state === 'small' ? 'large' : 'large';
  }
  constructor() {}

  ngOnInit() {}
}
