import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// --- services
import { AuthService } from './services/auth.service';

// --- guards
import { RequireUserGuardGuard } from './guards/require-user-guard.guard';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';

// -- compononents
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPageComponent,
    canActivate: [RequireAnonGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [RequireAnonGuardService]
  },

  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [RequireUserGuardGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    HeaderComponent,
    FooterComponent,
    AuthFormComponent,
    ProfilePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, RequireAnonGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
