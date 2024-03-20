import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreviewComponent } from './components/creview/creview.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SofferComponent } from './components/soffer/soffer.component';
import { ServicesComponent } from './components/services/services.component';
import { PqualityComponent } from './components/pquality/pquality.component';
import { ProductsComponent } from './components/products/products.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreviewComponent,
    FooterComponent,
    SubscribeComponent,
    SofferComponent,
    ServicesComponent,
    PqualityComponent,
    ProductsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
