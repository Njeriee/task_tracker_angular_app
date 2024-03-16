import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent]
})
export class HeaderComponent {
  title = 'Task tracker';

  // here we define the toggleAddTask() method
  toggleAddTask(){
    console.log("hey there I am a custom function for a reusable btn element")
  }
}
