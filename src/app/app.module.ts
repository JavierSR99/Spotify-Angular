import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ // Declaraciones: componentes, directivas, pipes
    AppComponent
  ],
  imports: [ // Solo se importan otros módulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
