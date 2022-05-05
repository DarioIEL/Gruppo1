import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElencoYachtComponent } from './components/elenco-yacht/elenco-yacht.component';
import { YachtComponent } from './components/elenco-yacht/yacht/yacht.component';
import { ModYachtComponent } from './components/elenco-yacht/mod-yacht/mod-yacht.component';
import { MenuOfferteComponent } from './components/menu-offerte/menu-offerte.component';
import { OffertaComponent } from './components/menu-offerte/offerta/offerta.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ElencoYachtComponent,
    YachtComponent,
    ModYachtComponent,
    MenuOfferteComponent,
    OffertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
