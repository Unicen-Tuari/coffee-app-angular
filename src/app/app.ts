import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coffee-shop');
}
