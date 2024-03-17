import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // this is a service to toggle the add task form
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  // methods/functions
  // when the add button is clicked the method will be called
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  onToggle():Observable<any>{
    return this.subject.asObservable()
  }
}
