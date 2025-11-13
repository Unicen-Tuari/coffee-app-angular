import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoffeeApi } from '../coffee-api';
import { Coffee } from '../coffee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [NgFor, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  protected coffees: Coffee[] = [];
  protected name: string | undefined;
  protected origin: string | undefined;

  constructor(private coffeeApi: CoffeeApi) {}

  loadCoffees(): void {
    this.coffeeApi.getCoffees().subscribe(
      (data) => {
        this.coffees = data;
        console.log('Coffees loaded:', this.coffees);
      },
      (error) => {
        console.error('An error occurred while fetching coffees:', error);
      }
    );
  }

  ngOnInit(): void {
    this.loadCoffees();
  }

  onSubmit(form: any): void {
    const newCoffee: any = {
      name: this.name,
      origin: this.origin,
    };

    this.coffeeApi.createCoffee(newCoffee).subscribe(
      (addedCoffee) => {
        this.coffees.push(addedCoffee);
        console.log('Coffee added:', addedCoffee);
      },
      (error) => {
        console.error('An error occurred while adding coffee:', error);
      }
    );
  }

  deleteCoffee(id: number): void {
    this.coffeeApi.deleteCoffee(id).subscribe(
      () => {
        this.coffees = this.coffees.filter(coffee => coffee.id !== id);
        console.log('Coffee deleted with id:', id);
      },
      (error) => {
        console.error('An error occurred while deleting coffee:', error);
      }
    );
  }
}