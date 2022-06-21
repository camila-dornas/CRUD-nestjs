import { Injectable } from '@nestjs/common';
import { tasks } from './data/tasks.data';
import { Task } from './tasks';

@Injectable()
export class TaskService {
  data = tasks; // traz as informações do banco de dados.
  getAll() {
    return this.data;
  }

  getById(id: number) {
    const getTask = this.data.find((value) => value.id == id);
    return getTask; // retorna a task do id selecionado.
  }

  createTask(task: Task) {
    const lastId = this.data[this.data.length - 1].id;
    task.id = lastId + 1;
    this.data.push(task);
    return task;
  } // Cria a nova tarefa, adiciona o id em sequencia e retorna a tarefa criada.

  update(task: Task) {
    const taskById = this.getById(task.id);
    if (taskById) {
      taskById.completed = task.completed;
      taskById.description = task.description;
    }
    return task;
  } // Altera as informações conforme o id e as descrições do body
}
