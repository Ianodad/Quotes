import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private elem: ElementRef
  ) {}

  @Input()
  set appSelected(condition: boolean) {
    if (condition) {
      this.elem.nativeElement.style.borderColor = 'red ';
    } else {
      this.viewContainer.clear();
    }
  }
}
// this.elem.nativeElement.style.borderColor = 'red ';
