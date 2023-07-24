import { UserService } from './../../../shared/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
constructor(private userService:UserService,private loggerService:LoggerService,private router:Router){
  if (this.loggerService.isLoggedin || localStorage.getItem('token')) {
    this.router.navigate(['/']);
  }
}


  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]{3,30}$'),
    ]),
    // phone: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(10),
    //   Validators.maxLength(10),
    //   Validators.pattern('^[6-9]{1}[0-9]{9}$'),
    // ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get name() {
    return this.form.get('name');
  }
  // get phone() {
  //   return this.form.get('phone');
  // }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

   onSubmit() {
    // console.log("hlo")
 this.userService.register(this.email?.value,this.password?.value).subscribe(async(res)=>{
  let token = await res.user.getIdToken()
  localStorage.setItem('token',token)
 },error=>{
  alert(error.message)
 })
  }
}
