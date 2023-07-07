import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  heros: Hero[] = [];
  selectedHero?: Hero;
  heroService: HeroService = inject(HeroService);

  constructor() {}
  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeros(): void {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros));
  }
}
