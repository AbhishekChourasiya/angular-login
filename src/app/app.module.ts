import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule} from './core/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule,  MatRippleModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './app.service';
import { MatTabsModule, MatTableModule } from '@angular/material';

import {AuthService} from './auth.service';
import {TokenStorage} from './token.storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatRippleModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [HttpClientModule, UserService, AuthService, TokenStorage ],
  bootstrap: [AppComponent]
})
export class AppModule { }
