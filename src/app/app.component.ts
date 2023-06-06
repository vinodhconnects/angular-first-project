import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class AppComponent {
  title:string = 'first-angular-app';
  services:string[] = ["Application Services","Infrastructure Services","Testing Services"]
  themes:string[] = ["dark" , "light", " blue " ," darkred" ]
}

