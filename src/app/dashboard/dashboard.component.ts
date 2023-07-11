import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heros: Hero[] = [];
  private heroService: HeroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService
      .getHeros()
      .subscribe((heros) => (this.heros = heros.slice(0, 5)));
  }
}
