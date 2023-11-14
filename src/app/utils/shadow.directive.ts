
import { Directive, HostBinding, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  @HostBinding('style.boxShadow') boxShadow="2px 2px 12px red";
  @HostBinding('style.background') background="red";
  constructor() { }
 /**
  * mouseEnter
  */
 @HostListener('mouseenter') onMouseEnter() {
  this.background = 'yellow';
}
 
@HostListener('mouseleave') onMouseLeave() {
  this.background = 'red';
}
}
 