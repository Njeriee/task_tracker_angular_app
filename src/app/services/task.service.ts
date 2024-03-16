import { Injectable } from '@angular/core';
// importing mock tasks
import { TASKS } from '../mock-tasks';
// import interface that is used to create tasks
import { Task } from '../Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS
  }
}
