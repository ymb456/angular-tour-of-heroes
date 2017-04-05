"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    ;
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    ;
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n\t<h2>My Heroes</h2>\n\t<ul class = \"heroes\">\n\t   <li [class.selected]=\"hero === selectedHero\" \n\t   *ngFor= \"let hero of heroes\" (click)=\"onSelect(hero) \">\n\t   <span class = \"badge\">{{hero.id}} </span>{{hero.name}} \n\t   </li>\n\t</ul>\t\n\t<hero-detail [hero] = \"selectedHero\"></hero-detail>\n\t",
        styles: ["\n\t\t.selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t\t}\n\t\t.heroes {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 15em;\n\t\t}\n\t\t.heroes li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t\t}\n\t\t.heroes li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t\t}\n\t\t.heroes li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t\t}\n\t\t.heroes .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t\t}\n\t\t.heroes .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n  }"]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
;
//# sourceMappingURL=heroes.component.js.map