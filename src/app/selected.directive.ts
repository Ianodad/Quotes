import { Directive, Input, ElementRef } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {

  constructor(private elem: ElementRef) {
    /// DIRECT CUSTOM////////////////////////////
    // this.elem.nativeElement.style.borderColor = 'red ';
  /// DIRECT CUSTOM////////////////////////////
  }
  @Input()
  set appSelected(val) {
    if (val) {
      this.elem.nativeElement.style.borderColor = 'red ';
    } else {
      this.elem.nativeElement.clear();
    }

  }


}
