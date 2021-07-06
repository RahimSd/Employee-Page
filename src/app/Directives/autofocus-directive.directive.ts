import { Directive, ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocusDirective]'
})
export class AutofocusDirectiveDirective implements AfterViewInit  {


  constructor(private el:ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
