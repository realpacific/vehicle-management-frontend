import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: ':email/vehicles', component: VehiclesListComponent },
	{ path: 'signup', component: SignupComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
