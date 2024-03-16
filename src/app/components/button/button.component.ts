import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // here we declare the props to be passed on to the button component whenever it 
  //it is rendered in a dom
  // the props are passed using the @input decorator
  // THESE ARE VARIABLES
  @Input() text: string | undefined;
  @Input() color!: string;

  // event emitter
  // the event emitter function is called btnClick
  // you register the btnClick on the components where the button is placed so as to indicate what type of action you want to happen
  // THIS IS ALSO A VARIABLE
  @Output() btnClick = new EventEmitter();

  // adding events methods
  // when the button is clicked an event is emitted
  // THIS IS A METHOD
  onClick(){
    this.btnClick.emit()
    // console.log("wuehhh")

  }

}
