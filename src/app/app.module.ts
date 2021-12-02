import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './layout/contact/contact.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { PartnerComponent } from './layout/partner/partner.component';
import { AboutComponent } from './layout/about/about.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './layout/product/product.component';
import { IndexPartnerComponent } from './layout/partner/index-partner/index-partner.component';
import { IndexProductComponent } from './layout/product/index-product/index-product.component';

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
    IndexProductComponent
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
