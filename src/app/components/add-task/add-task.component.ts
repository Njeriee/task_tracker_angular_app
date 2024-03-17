import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Tasks';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  // here we pass in the form inputs
  text!: string;
  day!: string;
  reminder: boolean=false

  // new task event emitter
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter

  // functions/methods
  onSubmit(){
    // validation
    if(!this.text){
      alert('Please add text')
      return;
    }
    if(!this.day){
      alert('Please add the day')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    // new task event emit
    this.onAddTask.emit(newTask)
    
    // the following clears the form after event emission
    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
