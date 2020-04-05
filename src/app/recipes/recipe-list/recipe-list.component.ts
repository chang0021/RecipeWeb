import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [
    new Recipe('NapaDumpling', 'This is a recipe of making dumplings. ', 'https://omnivorescookbook.com/wp-content/uploads/2015/02/1502_How-to-Make-Chinese-Dumplings-From-Scratch_002.jpg'),
    new Recipe('Chinese doughnuts ', 'This is a recipe of makeing Chinese doughnuts', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Youtiao.jpg/250px-Youtiao.jpg')
  ];
  constructor() { }

  ngOnInit() {
    
  }

  onRecipeSelected(recipeSelected: Recipe){
    this.recipeWasSelected.emit(recipeSelected);
    console.log("recipe list send out event! " + recipeSelected.name);  
  }

}
