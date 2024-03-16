import { Component } from '@angular/core';
// import interface that is used to create tasks
import { Task } from '../../Tasks';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TaskItemComponent],
    // providers: [TaskService]
})
export class TasksComponent {
  tasks : Task[] = [];

  constructor(private taskService: TaskService) { }

  // the service will run once the component is initiated
  ngOnInit(): void {
     this.tasks = this.taskService.getTasks();
  }

}
