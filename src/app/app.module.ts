import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';





@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path: 'heroes',
				component: HeroesComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'detail/:id',
				component: HeroDetailComponent
			}
		])
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent],
	providers: [
		HeroService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
