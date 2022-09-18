import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [ 
        new Recipe('Samosa',
        'Triangle Shaped Samosa',
        'https://media.istockphoto.com/photos/gujiya-samosa-an-indian-holi-special-snacks-picture-id1210991949?s=612x612',
        [
            new Ingredient('Potato',1),
            new Ingredient('Flour',2)
        ]
        ),
        new Recipe('Pani Puri',
        'Indian Pani Puri',
        'https://as2.ftcdn.net/v2/jpg/03/05/35/65/1000_F_305356563_RjpA8bNIfjd2s78JpTt3Ed6hKWPUBOwS.jpg',
        [
            new Ingredient('Puri',6),
            new Ingredient('Potato',1)
        ]
         ),
        
      ];

      constructor(private slService: ShoppingListService)  {

      }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}