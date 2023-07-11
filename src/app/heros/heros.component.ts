import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  heros: Hero[] = [];
  selectedHero?: Hero;
  private heroService: HeroService = inject(HeroService);
  private messageService: MessageService = inject(MessageService);

  constructor() {}
  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heros.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
