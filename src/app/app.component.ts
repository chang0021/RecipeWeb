import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature:string = 'recipes'; 

  title = 'recipeWeb';
  switched(feature : string){
    this.feature = feature; 
    // console.log("feature" + feature + " was selected!"); 
  }
}
