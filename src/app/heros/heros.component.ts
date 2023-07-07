import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
  private heroService: HeroService = inject(HeroService);
  private messageService: MessageService = inject(MessageService);

  constructor() {}
  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HerosComponent : Selected hero id=${hero.id}`);
  }
  getHeros(): void {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros));
  }
}
