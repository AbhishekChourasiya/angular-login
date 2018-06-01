import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RouterModule , Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'login', component: LoginComponent },
    {path : '', component : LoginComponent},
    {path : 'about', component : AboutComponent},
    {path : 'contact', component: ContactComponent},
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
