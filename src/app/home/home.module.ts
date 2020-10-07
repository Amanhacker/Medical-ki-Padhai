import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [HomeComponent],  
  imports: [
    CommonModule,
    NgbModule,
    MatCarouselModule,
    SlickCarouselModule,
    YouTubePlayerModule
  ],  
  exports: [HomeComponent]
})
export class HomeModule { }
