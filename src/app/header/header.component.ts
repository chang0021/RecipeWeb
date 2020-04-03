import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()  swithedFocus = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
  }

  OnClicked(featureSelected: string){
    this.swithedFocus.emit(featureSelected); 
    // console.log(featureSelected + "was clicked!"); 
  }

}
