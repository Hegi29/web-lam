import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { IndexPartnerComponent } from './pages/partner/index-partner/index-partner.component';
import { IndexProductComponent } from './pages/product/index-product/index-product.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HeaderComponent } from './layout/header/header.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CarouselComponent,
    PartnerComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    IndexPartnerComponent,
    IndexProductComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
