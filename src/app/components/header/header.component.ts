import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/logger.service';
// import { UserService } from '../reactiveForm/user.service';
// import { RegisterForm } from '../registerForm/registerForm.component';
// import {
//   animate,
//   state,
//   style,
//   transition,
//   trigger,
// } from '@angular/animations';
// import { Store } from '@ngrx/store';

const routerLinks = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'About', link: '/about' },
  { name: 'Contact-us', link: '/contact' },
  // { name: 'todo', link: '/todo' },
  // { name: 'zippy', link: '/zippy' },
  // { name: 'change password', link: '/change-password' },
  // { name: 'http', link: '/http' },
  // { name: 'Github', link: '/github/followers' },
  // { name: 'firebase', link: '/firebase' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  links: any[] = routerLinks;
  constructor(private router: Router, private loggerService: LoggerService) {}
  loggedIn: any;

  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('token')) {
          this.loggerService.isLoggedin = true;
          this.loggedIn = this.loggerService.isLoggedin;
        } else {
          this.loggerService.isLoggedin = false;
          this.loggedIn = this.loggerService.isLoggedin;
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.loggerService.isLoggedin = false;
    this.loggedIn = this.loggerService.isLoggedin;
    this.router.navigate(['/login']);
  }
}
