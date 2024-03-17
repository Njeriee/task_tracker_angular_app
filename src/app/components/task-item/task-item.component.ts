import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Task } from '../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  // we declare the prop here as an input variable
  // the input variable is of type task i.e the interface we created
  @Input() task!: Task;

  // event emitter for deleting a task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  // using font awsome
  faTimes = faTimes;

  // a funtion that gets the task when the onDeleteTask event is fired
  onDelete(task: Task){
    console.log(task)
    this.onDeleteTask.emit(task)
  }

  onToggle(task :Task){
    this.onToggleReminder.emit(task)
  }

}
