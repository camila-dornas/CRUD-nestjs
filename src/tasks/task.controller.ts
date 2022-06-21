import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './tasks';

@Controller('tasks') // define o nome da rota geral
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.taskService.getById(id);
  }

  @Post()
  createTask(@Body() task: Task) {
    return this.taskService.createTask(task);
  } // precisou retirar o parametro do body para funcionar
}
