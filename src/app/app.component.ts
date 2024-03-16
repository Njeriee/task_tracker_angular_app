import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
    // the selector is the html tag of your component that will be renderd in another component
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // register your components here using their export name from their export class in the ts component
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  // declare component functionalities here i.e lifecycle methods
}
