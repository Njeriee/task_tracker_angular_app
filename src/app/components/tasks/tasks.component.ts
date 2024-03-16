import { Component } from '@angular/core';
// importing mock tasks
import { TASKS } from '../../mock-tasks';
// import interface that is used to create tasks
import { Task } from '../../Tasks';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TaskItemComponent]
})
export class TasksComponent {
  tasks : Task[] = TASKS;

}
