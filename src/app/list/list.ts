import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor, NgIf],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  

  protected readonly coffeeRegions = [
    { id: 'brasil', name: 'Brasil' },
    { id: 'colombia', name: 'Colombia' },
    { id: 'kenya', name: 'Kenya' },
    { id: 'ethiopia', name: 'Ethiopia' },
    { id: 'vietnam', name: 'Vietnam' },
    { id: 'guatemala', name: 'Guatemala' },
    { id: 'costa-rica', name: 'Costa Rica' },
    { id: 'yemen', name: 'Yemen' },
    { id: 'tanzania', name: 'Tanzania' },
    { id: 'honduras', name: 'Honduras' }
  ];

  mostrarBoton(): boolean {
    const random = Math.random();
    console.log('Random value:', random);
    return random > 0.5 ? true : false;
  }

}
