import { Injectable, inject } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  messageService: MessageService = inject(MessageService);
  constructor() {}
  getHeros(): Observable<Hero[]> {
    const heros = of(HEROS);
    this.messageService.add('Hero Service : fetched heros');
    return heros;
  }
}
