import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros/heros.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, HerosComponent, MessagesComponent, RouterModule],
})
export class AppComponent {
  title = 'Tour of Heros';
}
