import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent]
})
export class HeaderComponent {
  title = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  // here we define the toggleAddTask() method
  toggleAddTask(){
    console.log("hey there I am a custom function for a reusable btn element")
  }
}
