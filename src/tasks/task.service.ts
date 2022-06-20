import { Injectable } from '@nestjs/common';
import { tasks } from './data/tasks.data';

@Injectable()
export class TaskService {
  task = tasks; // traz as informações do banco de dados.
  getAll() {
    return this.task;
  }

  getById(id: number) {
    const getTask = this.task.find((value) => value.id == id);
    return getTask; // retorna a task do id selecionadao.
  }
}
