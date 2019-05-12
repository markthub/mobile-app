import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hide-header]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {

  headerHeight;
  scrollContent;

  @Input("header") header: HTMLElement;
  constructor(public renderer: Renderer, public element: ElementRef) {

  }

  ngOnInit() {
    this.headerHeight = this.header.clientHeight;
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];

    this.renderer.setElementStyle(this.header, "webkitTransition", "top 700ms");
    this.renderer.setElementStyle(this.scrollContent, "webkitTransition", "margin-top 700ms");
  }

  public onContentScroll(e) {
    if (e.scrollTop > 56) {
      this.renderer.setElementStyle(this.header, "top", "-45px");
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "45px");
    } else {
      this.renderer.setElementStyle(this.header, "top", "0px");
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "90px");
    }
  }
}
