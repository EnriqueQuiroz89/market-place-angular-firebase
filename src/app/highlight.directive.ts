import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(element: ElementRef) {

    // Cambia el DOM
    element.nativeElement.style.backgroundColor = 'blue';

    element.nativeElement.style.color = "white"

  }
}
