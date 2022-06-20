import { Injectable } from '@nestjs/common';
import { tasks } from './data/tasks.data';

@Injectable()
export class TaskService {
  task = tasks; // traz as informações do banco de dados.
  getAll() {
    return this.task;
  }
}
