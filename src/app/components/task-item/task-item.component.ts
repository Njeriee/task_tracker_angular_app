import { Component,Input } from '@angular/core';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  // we declare the prop here as an input variable
  // the input variable is of type task i.e the interface we created
  @Input() task!: Task;

}
