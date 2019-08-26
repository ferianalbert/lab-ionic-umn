import { Recipe } from './recipe.model';
import { OnInit, Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {
    
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  recipeDetail(recipeId) {
    console.log(this.recipesService.getRecipe(recipeId));
  }

}
