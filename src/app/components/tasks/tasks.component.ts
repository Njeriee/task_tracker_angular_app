import { Component } from '@angular/core';
// import interface that is used to create tasks
import { Task } from '../../Tasks';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [CommonModule, TaskItemComponent, AddTaskComponent]
})
export class TasksComponent {

  tasks : Task[] = [];

  constructor(private taskService: TaskService) { }

  // the service will run once the component is initiated
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {this.tasks = tasks});
  }

  // delete task service
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    console.log(task)
  }
}
