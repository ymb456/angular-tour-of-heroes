import {HeroService} from './hero.service';
import {Hero} from './hero'
import {Component, OnInit} from '@angular/core';

@Component ({
	selector: '<my-dashboard></my-dashboard>',
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
	heroes: Hero[] = [];
	constructor (private heroService: HeroService) {};
	ngOnInit(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5))};


};