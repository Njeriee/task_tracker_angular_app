import { Injectable } from '@angular/core';
// implementing observables
// the observable function is found in the rxjs file
import { Observable,of } from 'rxjs';
// importing mock tasks
import { TASKS } from '../mock-tasks';
// import interface that is used to create tasks
import { Task } from '../Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // observables are used for asynchronous functions
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS)
    return tasks
  }
}
