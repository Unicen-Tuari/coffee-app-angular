import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeeApi {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  // Get all coffees
  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${this.baseUrl}/coffees`);
  }
  // // Get a single coffee by ID
  // getCoffeeById(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/coffees/${id}`);
  // }
  // Create a new coffee
  createCoffee(coffee: any): Observable<Coffee> {
    return this.http.post<Coffee>(`${this.baseUrl}/coffees`, coffee);
  }
  // Update a coffee
  updateCoffee(id: number, coffee: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/coffees/${id}`, coffee);
  }
  // Delete a coffee
  deleteCoffee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/coffees/${id}`);
  }
}
