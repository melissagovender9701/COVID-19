import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { GlobalComponent } from './Components/global/global.component';
import { CountryComponent } from './Components/country/country.component';
import { AnimatedDigitComponent } from './Components/animated-digit/animated-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    GlobalComponent,
    CountryComponent,
    AnimatedDigitComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
