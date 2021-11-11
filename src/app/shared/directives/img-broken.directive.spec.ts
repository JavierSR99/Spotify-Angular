import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

@Component({
  template: '<img class="testingdir" appImgBroken [src]="srcMock" >'
})

class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const mockEl = new ElementRef('');
    const directive = new ImgBrokenDirective(mockEl);
    expect(directive).toBeTruthy();
  });

  it('🌧🌧 testcomponent should create an instance ', () => {
    expect(component).toBeTruthy();
  });

  it('🌧🌧 directive should change img', (done: DoneFn) => {
   const beforeImgElement = fixture.debugElement.query(By.css('.testingdir')).nativeElement;
   const beforeImgSrc = beforeImgElement.src; // url de src antes de ser cambiada
   component.srcMock = undefined;

   setTimeout(() => {
    const afterImgElement = fixture.debugElement.query(By.css('.testingdir')).nativeElement;
    const afterImgSrc = beforeImgElement.src;

    expect(afterImgSrc).toEqual('../../../assets/images/error.png');
    done();
   }, 3000);
  });
});
