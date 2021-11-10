import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const mockEl = new ElementRef('');
    const directive = new ImgBrokenDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
