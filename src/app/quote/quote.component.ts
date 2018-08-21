import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  quotes = [
    new Quote(
      1,
      'Come to me, all you who are weary and burdened, and I will give you rest.',
      'Jesus',
      'Matthew',
      0,
      0,
      new Date(2018, 3, 14)
    ),
    new Quote(
      1,
      'Aspire to inspire before we expire.',
      'Unknown',
      'Steve',
      0,
      0,
      new Date(2018, 6, 4)
    ),
    new Quote(
      1,
      'Everything you can imagine is real.',
      'Pablo Picasso',
      'Tom',
      0,
      0,
      new Date(2018, 6, 4)
    )
  ];

  quoteDelete(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(
        `Are you sure you want to delete quote by ${this.quotes[index].author}`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  upVote(index) {
    this.quotes[index].upVote = this.quotes[index].upVote + 1;
    console.log(this.quotes[index].upVote);
  }
  downVote(index) {
    this.quotes[index].downVote = this.quotes[index].downVote + 1;
    console.log(this.quotes[index].downVote);
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.unshift(quote);
  }

  // this method check for a UpVote to see which is the highest
  // highlighted(index) {
  // if (this.quotes[index].quoteHighlight = false) {
  //   if (this.quotes[index].upVote > this.quotes[index].holder) {
  //     let newUpVote = this.quotes[index].upVote;
  //     this.quotes[index].holder = newUpVote;
  //     this.quotes[index].quoteHighlight = true;
  //   }
  // }
  // }
}
// constructor() { }

// ngOnInit() {
// }
