import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from 'src/services/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import{ HeaderComponent } from './core/header/header.component'


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotPasswordComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
