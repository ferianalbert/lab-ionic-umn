import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  getAllRecipes(): import("./recipe.model").Recipe[] {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
