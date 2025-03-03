import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/Task.models';
import { TaskService } from '../../services/task.service';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task',
  imports: [PrimaryButtonComponent, FormsModule, TaskCardComponent],
  template: `
    <div
      class="flex flex-col gap-2 bg-slate-100 shadow-md w-1/3 mx-auto p-8  mt-12"
    >
      <h2 class="text-center font-bold text-xl">Add task</h2>
      <form
        (ngSubmit)="addTask()"
        #taskForm="ngForm"
        class="flex flex-col gap-2 items-stretch mt-2"
      >
        <div class="flex flex-col items-baseline justify-start">
          <label for="title">Title</label>
          <input
            class="p-3 rounded-sm w-full outline-none "
            type="text"
            placeholder="Go to gym"
            [(ngModel)]="newTask().title"
            name="title"
          />
        </div>
        <div class="flex flex-col items-baseline justify-start gap-3">
          <label for="category">Category</label>
          <input
            class="p-3 rounded-sm w-full outline-none "
            type="text"
            placeholder="Urgent"
            [(ngModel)]="newTask().categoryName"
            name="categoryName"
          />
        </div>

        <app-primary-button class="mt-3" label="Add" />
      </form>
    </div>

    <div
      class="flex flex-col shadow-md p-6 w-1/2 mx-auto mt-8 items-center justify-between gap-1"
    >
      <h1 class="text-xl ">My tasks</h1>
      @if(tasks()!=null){ @for(task of tasks();track task.id){
      <app-task-card
        class="bg-slate-100 shadow-md p-3 w-full mx-auto mt-8 items-center justify-between gap-2"
        [taskItem]="task"
        (itemDeleted)="deleteTask($event)"
      />
      }}
    </div>
  `,
  styles: `
  `,
})
export class TaskComponent {
  route = inject(ActivatedRoute);
  taskService = inject(TaskService);
  tasks = signal<Task[]>([]);
  userTaskId = signal('');

  newTask = signal<Task>({
    title: '',
    completed: false,
    categoryName: 'DO',
  });

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.taskService.getTasks(userId || '0').subscribe((t) => {
      this.tasks.set(t);
    });
  }

  addTask() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.taskService.addTask(this.newTask(), userId || '').subscribe((t) => {
      this.tasks().push(t);
    });
  }

  deleteTask(taskId: string) {
    this.tasks.set(
      this.tasks().filter((task) => task.id?.toString() !== taskId)
    );
  }
}
