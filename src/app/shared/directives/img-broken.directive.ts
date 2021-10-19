import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '../../../assets/images/error.png';
  @HostListener('error') handleError(): void {
    const nativeEl = this.host.nativeElement;
    // console.log('IMG not found', nativeEl);
    nativeEl.src = this.customImg;
  }

  constructor(private host: ElementRef ) {

   }
}
