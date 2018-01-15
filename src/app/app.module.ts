import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/header/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/header/sidenav/sidenav.component';
import { HeroHomeComponent } from './home/hero-home/hero-home.component';
import { BurgerMenuComponent } from './shared/burger-menu/burger-menu.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { CarouselComponent } from './home/hero-home/carousel/carousel.component';
import { UpcomingEventsComponent } from './home/upcoming-events/upcoming-events.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOfBodComponent } from './home/list-of-bod/list-of-bod.component';
import { MobileAppDownloadComponent } from './home/mobile-app-download/mobile-app-download.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    HeroHomeComponent,
    BurgerMenuComponent,
    CarouselComponent,
    UpcomingEventsComponent,
    OurServicesComponent,
    GalleryComponent,
    ListOfBodComponent,
    MobileAppDownloadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxCarouselModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
