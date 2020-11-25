import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchModule } from './search/search.module';
import { CoursesModule } from './courses/courses.module';
import { BlogModule } from './blog/blog.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeModule } from './home/home.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FooterModule } from './footer/footer.module';
import { RouterService } from './services/router.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,

    NgbModule,
    MatCarouselModule,
    SlickCarouselModule,
    YouTubePlayerModule,

    SearchModule,
    CoursesModule,
    HomeModule,
    BlogModule,
    LoginModule,
    SignupModule,
    PagenotfoundModule,
    FooterModule,

  ],
  providers: [HttpClientModule, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
