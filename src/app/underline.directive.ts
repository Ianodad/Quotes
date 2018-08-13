import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(
    private renderer: Renderer,
    private el: ElementRef
) { }
@HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
}

@HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
}
hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');

    } else {
       this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');

    }
}
}
