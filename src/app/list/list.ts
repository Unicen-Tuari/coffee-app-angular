import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoffeeApi } from '../coffee-api';
import { Coffee } from '../coffee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  protected coffees: Coffee[] = [];
  protected name: string | undefined;
  protected origin: string | undefined;
  protected editingCoffeeId: number | null = null;

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

  createCoffee(form: any): void {
    const newCoffee: any = {
      name: form.value.name,
      origin: form.value.origin,
    };

    this.coffeeApi.createCoffee(newCoffee).subscribe(
      (addedCoffee) => {
        this.coffees.push(addedCoffee);
        console.log('Coffee added:', addedCoffee);
        form.reset();
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
  updateCoffee(form: any): void {
    console.log(form);
    console.log('Update coffee with id:', form.value.id);
    this.coffeeApi.updateCoffee(form.value.id, {
      name: form.value.name,
      origin: form.value.origin
    }).subscribe(
      (updatedCoffee) => {
        const index = this.coffees.findIndex(coffee => coffee.id === updatedCoffee.id);
        if (index !== -1) {
          this.coffees[index] = updatedCoffee;
        }
        console.log('Coffee updated:', updatedCoffee);
        this.editingCoffeeId = null;
      },
      (error) => {
        console.error('An error occurred while updating coffee:', error);
      }
    );
  }

  editCoffee(id: number): void {
    if (this.editingCoffeeId === id) {
      this.editingCoffeeId = null;
      return;
    }
    this.editingCoffeeId = id;
    console.log('Edit coffee with id:', id);
    // Implement edit functionality if needed
  }
}