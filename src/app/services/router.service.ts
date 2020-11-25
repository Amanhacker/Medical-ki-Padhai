import { Injectable, NgModule } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class RouterService {

  constructor(private router: Router) { }

  routeToHome() {
    this.router.navigate(['/home']);
  }
 
  routeToCourses() {
    this.router.navigate(['/courses']);
  }

  routeToBlog() {
    this.router.navigate(['/blog']);
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

  routeToSignup() {
    this.router.navigate(['/signup']);
  }

  routeToAboutMe() {
    this.router.navigate(['/about-me']);
  }

}
