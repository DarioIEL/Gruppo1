import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OfferteComponent } from './offerte/offerte.component';
import { ElencoYachtComponent } from './elenco-yacht/elenco-yacht.component';
import { YachtComponent } from './elenco-yacht/yacht/yacht.component';
import { ModYachtComponent } from './elenco-yacht/mod-yacht/mod-yacht.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    OfferteComponent,
    ElencoYachtComponent,
    YachtComponent,
    ModYachtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
