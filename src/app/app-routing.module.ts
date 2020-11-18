import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search/search.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "courses",
    component: CoursesComponent,
  },
  {
    path: "about-me",
    component: AboutMeComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
