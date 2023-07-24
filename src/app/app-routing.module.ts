import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/forms/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"products",component:ProductsComponent},
  {path:"about",component:AboutUsComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"**",component:NotfoundpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
