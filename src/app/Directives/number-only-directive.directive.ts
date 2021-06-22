import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';


@Directive({
  selector: 'input[appNumberOnly]'
})

export class NumberOnlyDirectiveDirective {
  private regex: RegExp = new RegExp(/^[0-9\s]*$/);
  private regex1: RegExp = new RegExp(/^[.0-9 ]*/);
  private specialKeys: Array<number> = [46, 8, 9, 27, 13, 110, 190, 35, 36, 37, 39];
  @Input() maxlength: number;
  @Input() min: number;
  @Input() max: number;
  @Input() name: string;

  constructor(private el: ElementRef) {
  }
  @HostListener('input', ['$event']) onInputChange(event) {
    const e = <KeyboardEvent>event;
    if ((
      (this.specialKeys.indexOf(event.which) > -1) ||
      // to allow backspace, enter, escape, arrows
      (e.which == 65 && e.ctrlKey == true) ||
      // Allow: Ctrl+C
      (e.which == 67 && e.ctrlKey == true) ||
      // Allow: Ctrl+X
      (e.which == 88 && e.ctrlKey == true)) ||
      // Allow: Ctrl+V
      (e.which == 86 && e.ctrlKey == true)) {
      return;
    } else if (// to allow numbers
      (e.which >= 48 && e.which <= 57) ||
      // to allow numpad number
      (event.which >= 96 && event.which <= 105)) {

    } else if (e.shiftKey == true) {
      event.preventDefault();
    } else {
      event.preventDefault();
    }
    const initalValue = this.el.nativeElement.value;
    if (this.name == 'bdprice') {
      this.el.nativeElement.value = initalValue.replace(/[^.0-9 ]/g, '');
    } else {
      this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    }
    if (initalValue !== this.el.nativeElement.value) {

      event.preventDefault();
    }

    const current: string = this.el.nativeElement.value;

    const next: string = current.concat(event.key);
    if (this.name == 'bdprice') {
      if ((next && !String(next).match(this.regex1)) ||
        (this.maxlength && next.length > this.maxlength) ||
        (this.min && +next < this.min) ||
        (this.max && +next >= this.max)) {
        event.preventDefault();
      }
    } else {
      if ((next && !String(next).match(this.regex)) ||
        (this.maxlength && next.length > this.maxlength) ||
        (this.min && +next < this.min) ||
        (this.max && +next >= this.max)) {
        event.preventDefault();
      }
    }

  }
  ngOnInit() {
  }

}
