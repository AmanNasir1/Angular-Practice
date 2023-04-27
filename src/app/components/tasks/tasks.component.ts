import { Component } from '@angular/core';
import { TASK } from '../../mock-task';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = TASK;
}
