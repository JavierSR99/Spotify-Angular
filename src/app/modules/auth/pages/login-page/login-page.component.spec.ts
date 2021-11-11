import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Prueba sendLogin
   * Debe asegurarse que el form es inválido si se ingresan datos erróneos
   */
  it('🚫should return invalid form🚫', () => {
    const mockCredentials = {
      email : '0x0x0x0x0x',
      password : '111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toEqual(true);
  });

  /**
   * Prueba sendLogin
   * Debe asegurarse que el form es válido si se ingresan datos correctos
   */
   it('💚should return valid form💚', () => {
    const mockCredentials = {
      email : 'test@test.com',
      password : '12345678'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toEqual(false);
  });

  it('😁button should have the words "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
