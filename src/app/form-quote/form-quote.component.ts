import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {
  showDetails: boolean;

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

  constructor() {}

  ngOnInit() {}
}