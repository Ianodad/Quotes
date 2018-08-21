import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormQuoteComponent } from './form-quote/form-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { MenuComponent } from './menu/menu.component';
import { UnderlineDirective } from './underline.directive';
import { SelectedDirective } from './selected.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormQuoteComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    MenuComponent,
    UnderlineDirective,
    SelectedDirective
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
