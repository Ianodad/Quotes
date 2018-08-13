import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {

  constructor(private elem: ElementRef){
    /// DIRECT CUSTOM////////////////////////////
    // this.elem.nativeElement.style.borderColor = 'red ';
  /// DIRECT CUSTOM////////////////////////////


  }
///// INPUT FROM THE VIEW USING A PROPERTY VARIABLE//////
  @Input() set appSelected(hight: boolean) {
    if (hight) {
      this.elem.nativeElement.style.borderColor = 'red ';
    } else {
     this.elem.nativeElement.clear();

    }
  }
///// END PROPERTY VARIABLE//////



}
