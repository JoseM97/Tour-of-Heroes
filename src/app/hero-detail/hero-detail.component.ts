import { Hero } from '../hero';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, LoadChildren } from '@angular/router';
import { Location, NgLocalization } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { };

  @Input() hero?: Hero;

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void{
    this.getHero();
  }

  goBack(){
    this.location.back();
  }
}
