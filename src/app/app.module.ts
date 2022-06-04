import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconoComponent } from './components/header/icono/icono.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { Icon1Component } from './components/footer/icon1/icon1.component';
import { Icon2Component } from './components/footer/icon2/icon2.component';
import { Icon3Component } from './components/footer/icon3/icon3.component';
import { Icon4Component } from './components/footer/icon4/icon4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IconoComponent,
    NavbarComponent,
    Icon1Component,
    Icon2Component,
    Icon3Component,
    Icon4Component,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
