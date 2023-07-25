import { LoggerService } from '../../../services/logger.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private loggerService: LoggerService,
    private router: Router
  ) {
    if (this.loggerService.isLoggedin || localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    return this.userService
      .login(this.email?.value, this.password?.value)
      .subscribe(
        async (res) => {
          let token = await res.user.getIdToken();
          localStorage.setItem('token', token);
          this.router.navigate(['/']);
        },
        (error) => {
          alert(error.message);
        }
      );
  }

  googleSign(){
    return this.userService.googleSignIn().subscribe(
      async(res) => {
        console.log(res);
        let token = await res.user.getIdToken();
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );  
  }
}
