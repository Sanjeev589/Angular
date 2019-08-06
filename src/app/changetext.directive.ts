import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(element:ElementRef) { 
  element.nativeElement.style="color:blue;background-color:yellow";
  element.nativeElement.innerText="I CustomerDirective I changed you";
}
}